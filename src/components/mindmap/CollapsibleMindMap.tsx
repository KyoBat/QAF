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
  useReactFlow,
  ReactFlowProvider,
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

// Couleurs par défaut pour les niveaux - palette plus vibrante
const levelColors = [
  '#1e3a5f', // Niveau 0 - Bleu foncé (racine) - الرسول
  '#059669', // Niveau 1 - Vert émeraude - الصحابة
  '#0891b2', // Niveau 2 - Cyan - التابعين
  '#7c3aed', // Niveau 3 - Violet - العلماء
  '#db2777', // Niveau 4 - Rose - الأئمة
];

// Couleurs spécifiques pour les 4 Imams
const imamColors: Record<string, string> = {
  'malik': '#eab308',     // 🟡 Jaune doré - مالك
  'abu-hanifa': '#22c55e', // 🟢 Vert - أبو حنيفة
  'shafii': '#3b82f6',    // 🔵 Bleu - الشافعي
  'ahmad': '#a855f7',     // 🟣 Violet - أحمد
};

// Custom Node Component avec bouton expand/collapse
function CollapsibleNode({ data, id }: NodeProps) {
  const hasChildren = data.hasChildren;
  const isExpanded = data.isExpanded;
  const onToggle = data.onToggle;
  const level = data.level;
  const isRoot = level === 0;
  
  // Déterminer si c'est un imam pour utiliser sa couleur spécifique
  const nodeColor = data.imamId ? imamColors[data.imamId] || data.color : data.color;

  return (
    <div 
      className={`relative flex items-center gap-2 ${isRoot ? 'flex-col' : ''} transition-all duration-300 hover:scale-105`}
      style={{
        background: isRoot 
          ? `linear-gradient(135deg, ${nodeColor} 0%, ${nodeColor}dd 100%)`
          : `linear-gradient(135deg, ${nodeColor} 0%, ${nodeColor}cc 100%)`,
        color: 'white',
        borderRadius: isRoot ? '50%' : '16px',
        padding: isRoot ? '24px 28px' : '12px 18px',
        fontSize: isRoot ? '18px' : '14px',
        fontWeight: isRoot ? 'bold' : '500',
        minWidth: isRoot ? '160px' : '130px',
        boxShadow: isRoot 
          ? `0 8px 24px -4px ${nodeColor}66, 0 4px 8px -2px rgba(0,0,0,0.1)`
          : `0 4px 16px -2px ${nodeColor}44, 0 2px 4px -1px rgba(0,0,0,0.1)`,
        border: '2px solid rgba(255,255,255,0.3)',
        backdropFilter: 'blur(4px)',
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

// Fonction pour compter les descendants visibles (currently unused but kept for future use)
function _countVisibleDescendants(
  node: MindMapData, 
  expandedNodes: Set<string>
): number {
  if (!node.children || !expandedNodes.has(node.id)) return 0;
  
  let count = node.children.length;
  for (const child of node.children) {
    count += _countVisibleDescendants(child, expandedNodes);
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
  _index: number = 0,
  _siblingCount: number = 1,
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
    const _currentYOffset = y;

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

// Composant interne qui utilise useReactFlow
function CollapsibleMindMapInner({ 
  data, 
  title, 
  className = '',
  defaultExpanded = false,
  locale = 'fr'
}: CollapsibleMindMapProps) {
  const { fitView } = useReactFlow();
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
    // Déclencher fitView après un court délai pour laisser le temps aux nodes de se créer
    setTimeout(() => {
      fitView({ padding: 0.3, duration: 400 });
    }, 50);
  }, [data, fitView]);

  const collapseAll = useCallback(() => {
    setExpandedNodes(new Set([data.id]));
    // Recentrer après collapse
    setTimeout(() => {
      fitView({ padding: 0.3, duration: 400 });
    }, 50);
  }, [data.id, fitView]);

  return (
    <div className={`w-full ${className}`} dir="ltr">
      {title && (
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2" dir="rtl">
            <span className="text-2xl">🗺️</span>
            <span>{title}</span>
          </h3>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 font-medium"
            >
              <span className="text-lg">+</span>
              <span>{t.expandAll}</span>
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 font-medium"
            >
              <span className="text-lg">−</span>
              <span>{t.collapseAll}</span>
            </button>
          </div>
        </div>
      )}
      <div className="w-full h-[600px] bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
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
      <div className={`mt-4 flex justify-center gap-6 text-sm text-slate-600 dark:text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white text-xs font-bold shadow">+</span>
          <span className="font-medium">{t.openBranch}</span>
        </span>
        <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 text-white text-xs font-bold shadow">−</span>
          <span className="font-medium">{t.closeBranch}</span>
        </span>
      </div>
    </div>
  );
}

// Composant wrapper avec ReactFlowProvider
export default function CollapsibleMindMap(props: CollapsibleMindMapProps) {
  return (
    <ReactFlowProvider>
      <CollapsibleMindMapInner {...props} />
    </ReactFlowProvider>
  );
}
