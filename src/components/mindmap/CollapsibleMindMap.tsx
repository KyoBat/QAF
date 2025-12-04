'use client';

import React, { useCallback, useState, useMemo, useEffect } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Handle,
  Position,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  NodeProps,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Types pour les données du mind map
export interface MindMapData {
  id: string;
  label: string;
  labelAr?: string;
  children?: MindMapData[];
  color?: string;
  icon?: string;
}

// Couleurs par défaut pour les niveaux
const levelColors = [
  '#1e3a5f', // Niveau 0 - Bleu foncé (racine)
  '#2d6a4f', // Niveau 1 - Vert foncé
  '#9c6644', // Niveau 2 - Marron
  '#7b2cbf', // Niveau 3 - Violet
  '#c9184a', // Niveau 4 - Rouge
];

// Custom Node Component avec bouton expand/collapse
function CollapsibleNode({ data, id }: NodeProps) {
  const hasChildren = data.hasChildren;
  const isExpanded = data.isExpanded;
  const onToggle = data.onToggle;
  const level = data.level;
  const isRoot = level === 0;

  return (
    <div 
      className={`relative flex items-center gap-2 ${isRoot ? 'flex-col' : ''}`}
      style={{
        background: data.color,
        color: 'white',
        borderRadius: isRoot ? '50%' : '12px',
        padding: isRoot ? '20px 24px' : '10px 16px',
        fontSize: isRoot ? '16px' : '14px',
        fontWeight: isRoot ? 'bold' : 'normal',
        minWidth: isRoot ? '140px' : '120px',
        boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.2)',
        border: '2px solid rgba(255,255,255,0.2)',
      }}
      dir="rtl"
    >
      {/* Handles pour les connexions */}
      <Handle 
        type="target" 
        position={data.direction === 'left' ? Position.Right : Position.Left} 
        style={{ opacity: 0 }}
      />
      
      {/* Contenu du node */}
      <div className="text-center flex-1">
        {data.icon && <span className="text-xl">{data.icon}</span>}
        <div className="font-semibold">{data.labelAr || data.label}</div>
        {data.labelAr && data.label !== data.labelAr && (
          <div className="text-xs opacity-75 mt-0.5">{data.label}</div>
        )}
      </div>

      {/* Bouton Expand/Collapse */}
      {hasChildren && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(id);
          }}
          className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white text-slate-800 font-bold text-sm shadow-lg hover:scale-110 transition-transform border-2"
          style={{ 
            borderColor: data.color,
            [data.direction === 'left' ? 'left' : 'right']: '-12px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {isExpanded ? '−' : '+'}
        </button>
      )}

      <Handle 
        type="source" 
        position={data.direction === 'left' ? Position.Left : Position.Right} 
        style={{ opacity: 0 }}
      />
    </div>
  );
}

const nodeTypes = {
  collapsible: CollapsibleNode,
};

// Fonction pour compter les descendants visibles
function countVisibleDescendants(
  node: MindMapData, 
  expandedNodes: Set<string>
): number {
  if (!node.children || !expandedNodes.has(node.id)) return 0;
  
  let count = node.children.length;
  for (const child of node.children) {
    count += countVisibleDescendants(child, expandedNodes);
  }
  return count;
}

// Fonction pour générer les nodes et edges
function generateNodesAndEdges(
  data: MindMapData,
  expandedNodes: Set<string>,
  onToggle: (id: string) => void,
  parentId: string | null = null,
  level: number = 0,
  index: number = 0,
  siblingCount: number = 1,
  direction: 'left' | 'right' = 'right',
  yOffset: number = 0
): { nodes: Node[]; edges: Edge[]; height: number } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const xSpacing = 300;
  const ySpacing = 70;
  const nodeHeight = 50;

  let x = 0;
  let y = 0;
  let totalHeight = nodeHeight;

  if (level === 0) {
    x = 0;
    y = 0;
  } else {
    x = direction === 'left' ? -xSpacing * level : xSpacing * level;
    y = yOffset;
  }

  const nodeColor = data.color || levelColors[level % levelColors.length];
  const isExpanded = expandedNodes.has(data.id);
  const hasChildren = data.children && data.children.length > 0;

  const node: Node = {
    id: data.id,
    type: 'collapsible',
    data: {
      label: data.label,
      labelAr: data.labelAr,
      icon: data.icon,
      color: nodeColor,
      level,
      direction,
      hasChildren,
      isExpanded,
      onToggle,
    },
    position: { x, y },
  };

  nodes.push(node);

  if (parentId) {
    const edge: Edge = {
      id: `${parentId}-${data.id}`,
      source: parentId,
      target: data.id,
      type: 'smoothstep',
      style: {
        stroke: nodeColor,
        strokeWidth: 2,
      },
      animated: false,
    };
    edges.push(edge);
  }

  // Traiter les enfants si le node est expanded
  if (hasChildren && isExpanded) {
    const children = data.children!;
    let currentYOffset = y;

    // Pour le niveau 0, diviser les enfants entre gauche et droite
    if (level === 0) {
      const midPoint = Math.ceil(children.length / 2);
      const leftChildren = children.slice(0, midPoint);
      const rightChildren = children.slice(midPoint);

      // Enfants de gauche
      let leftYOffset = -((leftChildren.length - 1) * ySpacing) / 2;
      for (let i = 0; i < leftChildren.length; i++) {
        const result = generateNodesAndEdges(
          leftChildren[i],
          expandedNodes,
          onToggle,
          data.id,
          level + 1,
          i,
          leftChildren.length,
          'left',
          leftYOffset
        );
        nodes.push(...result.nodes);
        edges.push(...result.edges);
        leftYOffset += result.height + 20;
      }

      // Enfants de droite
      let rightYOffset = -((rightChildren.length - 1) * ySpacing) / 2;
      for (let i = 0; i < rightChildren.length; i++) {
        const result = generateNodesAndEdges(
          rightChildren[i],
          expandedNodes,
          onToggle,
          data.id,
          level + 1,
          i,
          rightChildren.length,
          'right',
          rightYOffset
        );
        nodes.push(...result.nodes);
        edges.push(...result.edges);
        rightYOffset += result.height + 20;
      }
    } else {
      // Pour les autres niveaux, continuer dans la même direction
      let childYOffset = y - ((children.length - 1) * ySpacing) / 2;
      
      for (let i = 0; i < children.length; i++) {
        const result = generateNodesAndEdges(
          children[i],
          expandedNodes,
          onToggle,
          data.id,
          level + 1,
          i,
          children.length,
          direction,
          childYOffset
        );
        nodes.push(...result.nodes);
        edges.push(...result.edges);
        childYOffset += result.height + 10;
        totalHeight += result.height + 10;
      }
    }
  }

  return { nodes, edges, height: totalHeight };
}

interface CollapsibleMindMapProps {
  data: MindMapData;
  title?: string;
  className?: string;
  defaultExpanded?: boolean;
  locale?: string;
}

export default function CollapsibleMindMap({ 
  data, 
  title, 
  className = '',
  defaultExpanded = false,
  locale = 'fr'
}: CollapsibleMindMapProps) {
  // Translations
  const translations = {
    ar: { expandAll: 'فتح الكل', collapseAll: 'إغلاق الكل', openBranch: 'اضغط لفتح الفرع', closeBranch: 'اضغط لإغلاق الفرع' },
    en: { expandAll: 'Expand All', collapseAll: 'Collapse All', openBranch: 'Click to expand', closeBranch: 'Click to collapse' },
    fr: { expandAll: 'Tout ouvrir', collapseAll: 'Tout fermer', openBranch: 'Cliquer pour ouvrir', closeBranch: 'Cliquer pour fermer' },
  };
  const t = translations[locale as keyof typeof translations] || translations.fr;
  const isRTL = locale === 'ar';

  // État pour tracker quels nodes sont expanded
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    initial.add(data.id); // Root toujours expanded
    if (defaultExpanded) {
      // Expand tous les enfants du premier niveau
      data.children?.forEach(child => initial.add(child.id));
    }
    return initial;
  });

  const toggleNode = useCallback((nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  }, []);

  const { nodes: generatedNodes, edges: generatedEdges } = useMemo(
    () => generateNodesAndEdges(data, expandedNodes, toggleNode),
    [data, expandedNodes, toggleNode]
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(generatedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(generatedEdges);

  // Mettre à jour les nodes quand expandedNodes change
  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = generateNodesAndEdges(
      data, 
      expandedNodes, 
      toggleNode
    );
    setNodes(newNodes);
    setEdges(newEdges);
  }, [expandedNodes, data, toggleNode, setNodes, setEdges]);

  // Boutons pour expand/collapse all
  const expandAll = useCallback(() => {
    const allIds = new Set<string>();
    const addAllIds = (node: MindMapData) => {
      allIds.add(node.id);
      node.children?.forEach(addAllIds);
    };
    addAllIds(data);
    setExpandedNodes(allIds);
  }, [data]);

  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set([data.id]));
  }, [data.id]);

  return (
    <div className={`w-full ${className}`} dir="ltr">
      {title && (
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-xl font-bold text-primary" dir="rtl">
            🗺️ {title}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1"
            >
              <span>+</span>
              <span>{t.expandAll}</span>
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 text-sm bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-1"
            >
              <span>−</span>
              <span>{t.collapseAll}</span>
            </button>
          </div>
        </div>
      )}
      <div className="w-full h-[600px] bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.3}
          maxZoom={2}
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
        >
          <Controls showInteractive={false} />
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e2e8f0" />
        </ReactFlow>
      </div>
      
      {/* Légende */}
      <div className={`mt-4 flex justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <span className="flex items-center gap-1">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-green-500 text-xs font-bold">+</span>
          {t.openBranch}
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white border-2 border-slate-500 text-xs font-bold">−</span>
          {t.closeBranch}
        </span>
      </div>
    </div>
  );
}
