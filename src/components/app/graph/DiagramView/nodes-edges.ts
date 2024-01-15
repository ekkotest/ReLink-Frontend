/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-14 13:44:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-14 14:34:39
 * @FilePath: /ReLink-Frontend/src/components/app/graph/DiagramView/nodes-edges.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Edge, MarkerType } from 'reactflow';
import { Node } from 'reactflow';

import 'reactflow/dist/style.css';
const position = { x: 0, y: 0 };
const edgeOptions = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 15,
    height: 15,
  },
};
export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'CutstomNode',
    position,
    data: { label: 'node 2' },
  },
  {
    id: '2',
    type: 'CutstomNode',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    type: 'CutstomNode',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    type: 'CutstomNode',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    type: 'CutstomNode',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    type: 'CutstomNode',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    type: 'CutstomNode',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    type: 'CutstomNode',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    type: 'CutstomNode',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'CutstomNode',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'CutstomNode', data: { label: 'output' }, position },
];

export const initialEdges: Edge[] = [
  { id: 'e12', source: '1', target: '2', ...edgeOptions },
  { id: 'e13', source: '1', target: '3', ...edgeOptions },
  { id: 'e22a', source: '2', target: '2a', ...edgeOptions },
  { id: 'e22b', source: '2', target: '2b', ...edgeOptions },
  { id: 'e22c', source: '2', target: '2c', ...edgeOptions },
  { id: 'e2c2d', source: '2c', target: '2d', ...edgeOptions },
  { id: 'e45', source: '4', target: '5', ...edgeOptions },
  { id: 'e56', source: '5', target: '6', ...edgeOptions },
  { id: 'e57', source: '5', target: '7', ...edgeOptions },
];
