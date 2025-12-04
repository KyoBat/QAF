'use client';

import React, { useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
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

// Fonction pour générer les nodes et edges à partir des données hiérarchiques
function generateNodesAndEdges(
  data: MindMapData,
  parentId: string | null = null,
  level: number = 0,
  index: number = 0,
  siblingCount: number = 1,
  direction: 'left' | 'right' | 'center' = 'center'
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Calculer la position
  const xSpacing = 280;
  const ySpacing = 100;
  
  let x = 0;
  let y = 0;

  if (level === 0) {
    x = 0;
    y = 0;
  } else if (level === 1) {
    // Premier niveau: distribuer à gauche et à droite
    const isLeft = index < siblingCount / 2;
    x = isLeft ? -xSpacing : xSpacing;
    const adjustedIndex = isLeft ? index : index - Math.ceil(siblingCount / 2);
    const adjustedCount = isLeft ? Math.ceil(siblingCount / 2) : Math.floor(siblingCount / 2);
    y = (adjustedIndex - (adjustedCount - 1) / 2) * ySpacing;
    direction = isLeft ? 'left' : 'right';
  } else {
    // Niveaux suivants: continuer dans la même direction
    x = direction === 'left' ? -xSpacing * level : xSpacing * level;
    y = (index - (siblingCount - 1) / 2) * (ySpacing / level);
  }

  const nodeColor = data.color || levelColors[level % levelColors.length];
  
  const node: Node = {
    id: data.id,
    data: { 
      label: (
        <div className="text-center p-1" dir="rtl">
          {data.icon && <span className="text-lg mr-1">{data.icon}</span>}
          <span className="font-semibold">{data.labelAr || data.label}</span>
          {data.labelAr && data.label !== data.labelAr && (
            <div className="text-xs opacity-75 mt-0.5">{data.label}</div>
          )}
        </div>
      )
    },
    position: { x, y },
    style: {
      background: nodeColor,
      color: 'white',
      border: 'none',
      borderRadius: level === 0 ? '50%' : '12px',
      padding: level === 0 ? '20px' : '10px 16px',
      fontSize: level === 0 ? '16px' : '14px',
      fontWeight: level === 0 ? 'bold' : 'normal',
      minWidth: level === 0 ? '120px' : '100px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    type: 'default',
  };

  nodes.push(node);

  if (parentId) {
    const edge: Edge = {
      id: `${parentId}-${data.id}`,
      source: parentId,
      target: data.id,
      type: 'smoothstep',
      animated: false,
      style: { 
        stroke: nodeColor,
        strokeWidth: 2,
      },
    };
    edges.push(edge);
  }

  // Traiter les enfants
  if (data.children) {
    data.children.forEach((child, childIndex) => {
      const childDirection = level === 0 
        ? (childIndex < data.children!.length / 2 ? 'left' : 'right')
        : direction;
      
      const result = generateNodesAndEdges(
        child,
        data.id,
        level + 1,
        childIndex,
        data.children!.length,
        childDirection
      );
      nodes.push(...result.nodes);
      edges.push(...result.edges);
    });
  }

  return { nodes, edges };
}

interface MindMapProps {
  data: MindMapData;
  title?: string;
  className?: string;
}

export default function MindMap({ data, title, className = '' }: MindMapProps) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => generateNodesAndEdges(data),
    [data]
  );

  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className={`w-full ${className}`} dir="ltr">
      {title && (
        <h3 className="text-xl font-bold text-center mb-4 text-primary" dir="rtl">
          🗺️ {title}
        </h3>
      )}
      <div className="w-full h-[500px] bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.5}
          maxZoom={1.5}
          attributionPosition="bottom-left"
        >
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          <MiniMap 
            nodeColor={(node) => node.style?.background as string || '#1e3a5f'}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
