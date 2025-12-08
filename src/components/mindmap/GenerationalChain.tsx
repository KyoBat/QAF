'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ChainNode {
  id: string;
  name: string;
  nameAr?: string;
  dates?: string;
  icon?: string;
  color: string;
  note?: string;
  noteAr?: string;
}

interface ChainLink {
  from: string;
  to: string;
  label?: string;
  labelAr?: string;
}

export interface GenerationalChainData {
  nodes: ChainNode[];
  links: ChainLink[];
  title?: string;
  titleAr?: string;
}

interface GenerationalChainProps {
  data: GenerationalChainData;
  locale?: string;
  className?: string;
}

/**
 * GenerationalChain - Composant Timeline pour les chaînes de transmission
 * Affiche une progression verticale des savants avec leurs connexions
 */
export function GenerationalChain({ data, locale = 'ar', className }: GenerationalChainProps) {
  const isRTL = locale === 'ar';
  
  // Translations
  const title = isRTL ? (data.titleAr || data.title) : data.title;

  // Find incoming links for a node
  const getIncomingLinks = (nodeId: string) => data.links.filter(l => l.to === nodeId);
  const getOutgoingLinks = (nodeId: string) => data.links.filter(l => l.from === nodeId);

  // Build a map of node positions based on links
  const getNodeLevel = (nodeId: string, visited = new Set<string>()): number => {
    if (visited.has(nodeId)) return 0;
    visited.add(nodeId);
    
    const incomingLinks = getIncomingLinks(nodeId);
    if (incomingLinks.length === 0) return 0;
    
    const parentLevels = incomingLinks.map(l => getNodeLevel(l.from, visited));
    return Math.max(...parentLevels) + 1;
  };

  // Group nodes by level
  const nodesByLevel: Map<number, ChainNode[]> = new Map();
  data.nodes.forEach(node => {
    const level = getNodeLevel(node.id);
    if (!nodesByLevel.has(level)) {
      nodesByLevel.set(level, []);
    }
    nodesByLevel.get(level)!.push(node);
  });

  const levels = Array.from(nodesByLevel.keys()).sort((a, b) => a - b);

  // Get node by id
  const getNode = (id: string) => data.nodes.find(n => n.id === id);

  return (
    <div className={cn('w-full', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Title */}
      {title && (
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 justify-center">
          <span className="text-2xl">🔗</span>
          <span>{title}</span>
        </h3>
      )}

      {/* Chain Container */}
      <div className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        
        {/* Vertical Timeline */}
        <div className="flex flex-col items-center gap-0">
          {levels.map((level, levelIndex) => {
            const nodesAtLevel = nodesByLevel.get(level)!;
            const isLastLevel = levelIndex === levels.length - 1;
            const nextLevel = levels[levelIndex + 1];
            const nextLevelNodes = nextLevel !== undefined ? nodesByLevel.get(nextLevel) || [] : [];

            return (
              <React.Fragment key={level}>
                {/* Nodes at this level */}
                <div className={cn(
                  'flex gap-8 justify-center items-start',
                  nodesAtLevel.length > 1 && 'flex-wrap'
                )}>
                  {nodesAtLevel.map((node) => {
                    const displayName = isRTL ? (node.nameAr || node.name) : node.name;
                    const displayNote = isRTL ? (node.noteAr || node.note) : node.note;
                    const outgoingLinks = getOutgoingLinks(node.id);
                    const hasOutgoing = outgoingLinks.length > 0;

                    return (
                      <div key={node.id} className="flex flex-col items-center">
                        {/* Node Card */}
                        <div
                          className="relative px-6 py-4 rounded-xl text-white font-semibold text-center shadow-lg transition-transform hover:scale-105 min-w-[180px]"
                          style={{
                            background: `linear-gradient(145deg, ${node.color} 0%, ${node.color}cc 100%)`,
                            boxShadow: `0 8px 24px -4px ${node.color}44`,
                          }}
                        >
                          {node.icon && (
                            <span className="text-2xl mb-1 block">{node.icon}</span>
                          )}
                          <div className="text-lg">{displayName}</div>
                          {node.dates && (
                            <div className="text-sm opacity-80 mt-1">({node.dates})</div>
                          )}
                        </div>

                        {/* Note below node */}
                        {displayNote && (
                          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400 text-center max-w-[200px]">
                            ({displayNote})
                          </div>
                        )}

                        {/* Connector line down with link label */}
                        {hasOutgoing && !isLastLevel && (
                          <div className="flex flex-col items-center mt-3">
                            <div 
                              className="w-0.5 h-6" 
                              style={{ backgroundColor: node.color }} 
                            />
                            {outgoingLinks.map((link, idx) => {
                              const targetNode = getNode(link.to);
                              const displayLabel = isRTL ? (link.labelAr || link.label) : link.label;
                              return (
                                <div key={idx} className="flex flex-col items-center">
                                  {displayLabel && (
                                    <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400 shadow border border-slate-200 dark:border-slate-700 my-1">
                                      {displayLabel}
                                    </div>
                                  )}
                                  <div 
                                    className="text-lg" 
                                    style={{ color: targetNode?.color || '#6b7280' }}
                                  >
                                    ▼
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Horizontal connector for multiple nodes merging to one target */}
                {nodesAtLevel.length > 1 && nextLevelNodes.length === 1 && !isLastLevel && (
                  <div className="flex items-center justify-center w-full my-4">
                    <div className="relative flex items-center justify-center">
                      {/* Horizontal line */}
                      <div 
                        className="h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent dark:via-slate-500" 
                        style={{ width: `${Math.max((nodesAtLevel.length - 1) * 200, 100)}px` }} 
                      />
                      {/* Merge point arrow */}
                      <div className="absolute -bottom-6 text-xl" style={{ color: nextLevelNodes[0]?.color || '#6b7280' }}>
                        ▼
                      </div>
                    </div>
                  </div>
                )}

                {/* Spacing between levels when no merge */}
                {!isLastLevel && !(nodesAtLevel.length > 1 && nextLevelNodes.length === 1) && (
                  <div className="h-4" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {data.nodes.map(node => (
              <div key={node.id} className="flex items-center gap-2">
                <span>{node.icon}</span>
                <span className="text-slate-600 dark:text-slate-400">
                  {isRTL ? (node.nameAr || node.name) : node.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerationalChain;
