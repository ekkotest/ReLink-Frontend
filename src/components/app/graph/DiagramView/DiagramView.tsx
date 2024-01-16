import { ElkNode } from 'elkjs';
import ELK from 'elkjs/lib/elk.bundled.js';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
  useOnSelectionChange,
  useReactFlow,
} from 'reactflow';

import 'reactflow/dist/style.css';

import CutstomNode from './CutstomNode.tsx';
import DiagramDetail from './DiagramDetail.tsx';
import { initialEdges, initialNodes } from './nodes-edges.ts';

const elk = new ELK();
const nodeTypes = {
  CutstomNode: CutstomNode,
};

// Elk has a *huge* amount of options to configure. To see everything you can
// tweak check out:
//
// - https://www.eclipse.org/elk/reference/algorithms.html
// - https://www.eclipse.org/elk/reference/options.html
const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': ' 80',
  // 'elk.nodeLabels.placement': 'INSIDE V_CENTER H_RIGHT',
  // 'elk.direction': 'RIGTH',
  // nodeLayering: 'INTERACTIVE',
  // 'org.eclipse.elk.edgeRouting': 'ORTHOGONAL',
  // 'elk.layered.unnecessaryBendpoints': 'true',
  // 'elk.layered.spacing.edgeNodeBetweenLayers': '120',
  'org.eclipse.elk.layered.nodePlacement.bk.fixedAlignment': 'BALANCED',
};

const getLayoutedElements = (
  nodes: Node[],
  edges: any[],
  options: ElkNode['layoutOptions'] = {}
) => {
  const isHorizontal = options['elk.direction'] === 'RIGHT';
  const graph: ElkNode = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      // Adjust the target and source handle positions based on the layout
      // direction.
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',

      // Hardcode a width and height for elk to use when layouting.
      width: 276,
      height: 88,
    })),
    edges: edges,
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph?.children?.map((node) => ({
        ...node,
        // React Flow expects a position property on the node instead of `x`
        // and `y` fields.
        position: { x: node.x, y: node.y },
      })),

      edges: layoutedGraph.edges,
    }))
    .catch();
};

export default function LayoutFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const onLayout = useCallback(
    ({ direction = 'RIGHT', useInitialNodes = false }) => {
      const opts = { 'elk.direction': direction, ...elkOptions };
      const ns = useInitialNodes ? initialNodes : nodes;
      const es = useInitialNodes ? initialEdges : edges;

      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes as Node[]);
          setEdges(layoutedEdges as any[]);

          window.requestAnimationFrame(() => fitView());
        }
      );
    },
    [nodes, edges]
  );
  const [selectedNodes, setSelectedNodes] = useState<Node | null>(null);
  useOnSelectionChange({
    onChange: ({ nodes, edges }) => {
      setSelectedNodes(nodes[0]);
    },
  });
  // Calculate the initial layout on mount.
  useLayoutEffect(() => {
    onLayout({ direction: 'RIGHT', useInitialNodes: true });
  }, []);

  return (
    <div className='relative h-[100%]'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      ></ReactFlow>
      <div className='absolute -top-12 right-0 z-10'>
        {selectedNodes && <DiagramDetail></DiagramDetail>}
      </div>
    </div>
  );
}
