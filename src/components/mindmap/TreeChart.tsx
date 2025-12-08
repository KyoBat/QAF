'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

// Types pour les données de l'arbre
export interface TreeNodeData {
  id: string;
  label: string;
  labelAr?: string;
  children?: TreeNodeData[];
  color?: string;
  icon?: string;
}

interface TreeNodeProps {
  node: TreeNodeData;
  level: number;
  isLast: boolean;
  isRTL: boolean;
  expandedNodes: Set<string>;
  onToggle: (id: string) => void;
}

// Couleurs par niveau
const levelColors = [
  '#1e3a5f', // Niveau 0 - Bleu foncé (racine)
  '#059669', // Niveau 1 - Vert émeraude
  '#0891b2', // Niveau 2 - Cyan
  '#7c3aed', // Niveau 3 - Violet
  '#db2777', // Niveau 4 - Rose
  '#ea580c', // Niveau 5 - Orange
];

function TreeNode({ node, level, isLast: _isLast, isRTL, expandedNodes, onToggle }: TreeNodeProps) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const nodeColor = node.color || levelColors[level % levelColors.length];
  
  // Taille du nœud selon le niveau
  const isRoot = level === 0;
  const nodeSize = isRoot ? 'text-lg px-6 py-4' : level === 1 ? 'text-base px-5 py-3' : 'text-sm px-4 py-2.5';
  
  return (
    <div className={cn('flex flex-col items-center', isRTL && 'font-arabic')}>
      {/* Ligne verticale vers le parent (sauf pour la racine) */}
      {level > 0 && (
        <div 
          className="w-0.5 h-6" 
          style={{ backgroundColor: nodeColor + '66' }}
        />
      )}
      
      {/* Le nœud lui-même */}
      <div
        className={cn(
          'relative flex items-center gap-2 rounded-2xl text-white font-medium shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer select-none',
          nodeSize,
          isRoot && 'font-bold'
        )}
        style={{
          background: `linear-gradient(135deg, ${nodeColor} 0%, ${nodeColor}dd 100%)`,
          boxShadow: `0 4px 20px -4px ${nodeColor}55`,
          border: '2px solid rgba(255,255,255,0.2)',
        }}
        onClick={() => hasChildren && onToggle(node.id)}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Icône */}
        {node.icon && <span className={isRoot ? 'text-2xl' : 'text-xl'}>{node.icon}</span>}
        
        {/* Label */}
        <div className="text-center">
          <div>{node.labelAr || node.label}</div>
          {node.labelAr && node.label !== node.labelAr && (
            <div className="text-xs opacity-75 mt-0.5">{node.label}</div>
          )}
        </div>
        
        {/* Bouton expand/collapse */}
        {hasChildren && (
          <span 
            className={cn(
              'ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold transition-transform',
              isExpanded && 'rotate-180'
            )}
          >
            {isExpanded ? '−' : '+'}
          </span>
        )}
      </div>
      
      {/* Enfants */}
      {hasChildren && isExpanded && (
        <>
          {/* Ligne verticale vers les enfants */}
          <div 
            className="w-0.5 h-6" 
            style={{ backgroundColor: nodeColor + '44' }}
          />
          
          {/* Conteneur des enfants avec ligne horizontale */}
          <div className="relative flex items-start">
            {/* Ligne horizontale qui connecte les enfants */}
            {node.children!.length > 1 && (
              <div 
                className="absolute top-0 h-0.5 left-1/2 -translate-x-1/2"
                style={{ 
                  backgroundColor: levelColors[(level + 1) % levelColors.length] + '44',
                  width: `calc(100% - 80px)`,
                }}
              />
            )}
            
            {/* Les enfants */}
            <div className="flex gap-4 md:gap-8">
              {node.children!.map((child, index) => (
                <TreeNode
                  key={child.id}
                  node={child}
                  level={level + 1}
                  isLast={index === node.children!.length - 1}
                  isRTL={isRTL}
                  expandedNodes={expandedNodes}
                  onToggle={onToggle}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Traductions
const translations: Record<string, { expandAll: string; collapseAll: string; hint: string; fullscreen: string; close: string }> = {
  ar: {
    expandAll: 'فتح الكل',
    collapseAll: 'إغلاق الكل',
    hint: 'اضغط على العقدة لفتح/إغلاق الفروع',
    fullscreen: 'ملء الشاشة',
    close: 'إغلاق',
  },
  fr: {
    expandAll: 'Tout ouvrir',
    collapseAll: 'Tout fermer',
    hint: 'Cliquez sur un nœud pour ouvrir/fermer',
    fullscreen: 'Plein écran',
    close: 'Fermer',
  },
  en: {
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    hint: 'Click a node to expand/collapse',
    fullscreen: 'Fullscreen',
    close: 'Close',
  },
};

interface TreeChartProps {
  data: TreeNodeData;
  title?: string;
  locale?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export default function TreeChart({ 
  data, 
  title, 
  locale = 'ar',
  defaultExpanded = true,
  className 
}: TreeChartProps) {
  const isRTL = locale === 'ar';
  const t = translations[locale as keyof typeof translations] || translations.fr;
  
  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Collecter tous les IDs pour l'expansion
  const getAllIds = (node: TreeNodeData): string[] => {
    const ids = [node.id];
    if (node.children) {
      node.children.forEach(child => {
        ids.push(...getAllIds(child));
      });
    }
    return ids;
  };
  
  const allIds = getAllIds(data);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
    new Set(defaultExpanded ? allIds : [data.id])
  );
  
  const toggleNode = (id: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  
  const expandAll = () => setExpandedNodes(new Set(allIds));
  const collapseAll = () => setExpandedNodes(new Set([data.id]));
  
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);
  
  // Render tree content (shared between normal and fullscreen)
  const renderTreeContent = () => (
    <div className="w-full overflow-auto py-8 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 rounded-2xl border-2 border-slate-200/80 dark:border-slate-700 shadow-xl" style={{ maxHeight: isFullscreen ? 'calc(100vh - 150px)' : '600px' }}>
      <div className="flex justify-center min-w-max">
        <TreeNode
          node={data}
          level={0}
          isLast={true}
          isRTL={isRTL}
          expandedNodes={expandedNodes}
          onToggle={toggleNode}
        />
      </div>
    </div>
  );
  
  // Render control buttons
  const renderButtons = (showClose = false) => (
    <div className={cn('flex gap-3', isRTL && 'flex-row-reverse')}>
      {!showClose && (
        <button
          onClick={toggleFullscreen}
          className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg font-medium flex items-center gap-2"
        >
          <span>⛶</span>
          <span>{t.fullscreen}</span>
        </button>
      )}
      <button
        onClick={expandAll}
        className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg font-medium"
      >
        {t.expandAll}
      </button>
      <button
        onClick={collapseAll}
        className="px-4 py-2 text-sm bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all shadow-md hover:shadow-lg font-medium"
      >
        {t.collapseAll}
      </button>
      {showClose && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="px-4 py-2 text-sm bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg font-medium flex items-center gap-2"
        >
          <span>✕</span>
          <span>{t.close}</span>
        </button>
      )}
    </div>
  );
  
  return (
    <>
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsFullscreen(false);
          }}
        >
          <div className="w-full h-full max-w-[95vw] max-h-[95vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Fullscreen Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3" dir={isRTL ? 'rtl' : 'ltr'}>
                <span className="text-3xl">🌳</span>
                <span>{title}</span>
              </h3>
              {renderButtons(true)}
            </div>
            {/* Fullscreen Content */}
            <div className="flex-1 p-4 overflow-auto">
              {renderTreeContent()}
            </div>
          </div>
        </div>
      )}
      
      {/* Normal View */}
      <div className={cn('w-full', className)} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header avec titre et boutons */}
        {title && (
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="text-3xl">🌳</span>
              <span>{title}</span>
            </h3>
            {renderButtons(false)}
          </div>
        )}
        
        {/* Conteneur de l'arbre */}
        {renderTreeContent()}
        
        {/* Hint */}
        <p className="text-center text-xs text-slate-500 mt-4">
          💡 {t.hint}
        </p>
      </div>
    </>
  );
}
