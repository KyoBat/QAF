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

  // Taille adaptée au niveau
  const getNodeStyle = () => {
    if (isRoot) {
      return {
        padding: '28px 32px',
        fontSize: '20px',
        fontWeight: 'bold' as const,
        minWidth: '180px',
        borderRadius: '24px',
      };
    }
    if (level === 1) {
      return {
        padding: '16px 24px',
        fontSize: '16px',
        fontWeight: '600' as const,
        minWidth: '150px',
        borderRadius: '16px',
      };
    }
    return {
      padding: '14px 20px',
      fontSize: '15px',
      fontWeight: '500' as const,
      minWidth: '140px',
      borderRadius: '14px',
    };
  };

  const nodeStyle = getNodeStyle();

  return (
    <div 
      className={`relative flex items-center gap-3 ${isRoot ? 'flex-col' : ''} transition-all duration-300 hover:scale-[1.03] cursor-default select-none`}
      style={{
        background: isRoot 
          ? `linear-gradient(145deg, ${nodeColor} 0%, ${nodeColor}cc 100%)`
          : `linear-gradient(145deg, ${nodeColor}ee 0%, ${nodeColor}bb 100%)`,
        color: 'white',
        borderRadius: nodeStyle.borderRadius,
        padding: nodeStyle.padding,
        fontSize: nodeStyle.fontSize,
        fontWeight: nodeStyle.fontWeight,
        minWidth: nodeStyle.minWidth,
        boxShadow: isRoot 
          ? `0 12px 32px -6px ${nodeColor}55, 0 6px 12px -4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)`
          : `0 6px 20px -4px ${nodeColor}44, 0 3px 8px -2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.15)`,
        border: '2px solid rgba(255,255,255,0.25)',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        letterSpacing: '0.02em',
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
        {data.icon && <span className={`${isRoot ? 'text-3xl' : level === 1 ? 'text-2xl' : 'text-xl'} mb-1 block`}>{data.icon}</span>}
        <div className="leading-relaxed">{data.labelAr || data.label}</div>
        {data.labelAr && data.label !== data.labelAr && (
          <div className="text-xs opacity-80 mt-1 font-normal">{data.label}</div>
        )}
      </div>

      {/* Bouton Expand/Collapse */}
      {hasChildren && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(id);
          }}
          className="absolute flex items-center justify-center w-7 h-7 rounded-full bg-white text-slate-700 font-bold text-base shadow-lg hover:scale-115 hover:shadow-xl transition-all duration-200 border-2"
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

  // Espacement adapté pour meilleure lisibilité
  const xSpacing = 340;
  const ySpacing = 90;
  const nodeHeight = 70;

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
        strokeWidth: 3,
        strokeOpacity: 0.7,
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
        <div className="flex items-center justify-between mb-5 px-3">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-3" dir="rtl">
            <span className="text-3xl">🗺️</span>
            <span>{title}</span>
          </h3>
          <div className="flex gap-3">
            <button
              onClick={expandAll}
              className="px-5 py-2.5 text-sm bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-semibold"
            >
              <span className="text-xl">+</span>
              <span>{t.expandAll}</span>
            </button>
            <button
              onClick={collapseAll}
              className="px-5 py-2.5 text-sm bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 font-semibold"
            >
              <span className="text-xl">−</span>
              <span>{t.collapseAll}</span>
            </button>
          </div>
        </div>
      )}
      <div className="w-full h-[650px] bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 rounded-2xl border-2 border-slate-200/80 dark:border-slate-700 overflow-hidden shadow-xl">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          fitViewOptions={{ padding: 0.35 }}
          minZoom={0.25}
          maxZoom={2.5}
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
        >
          <Controls showInteractive={false} className="!bg-white/80 !rounded-xl !shadow-lg !border-slate-200" />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1.5} color="#cbd5e1" />
        </ReactFlow>
      </div>
      
      {/* Légende et instructions */}
      <div className={`mt-5 flex flex-col items-center gap-3`}>
        <div className={`flex justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <span className="flex items-center gap-2.5 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white text-sm font-bold shadow">+</span>
            <span className="font-medium">{t.openBranch}</span>
          </span>
          <span className="flex items-center gap-2.5 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 text-white text-sm font-bold shadow">−</span>
            <span className="font-medium">{t.closeBranch}</span>
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-500" dir={isRTL ? 'rtl' : 'ltr'}>
          {isRTL ? '💡 استخدم الماوس للتحريك والتكبير' : '💡 Use mouse to pan and scroll to zoom'}
        </p>
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
