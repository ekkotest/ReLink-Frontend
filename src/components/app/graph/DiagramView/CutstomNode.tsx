import Image from 'next/image';
import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export default memo((props: NodeProps) => {
  return (
    <>
      <Handle
        type='source'
        className='!right-0 opacity-0'
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={props.isConnectable}
      />
      <div
        className={`${
          props.selected ? 'border-sky-500' : 'border-zinc-300'
        } DagCard inline-flex h-36 w-72 flex-col items-start justify-start gap-3  rounded-lg border bg-white px-3.5 py-4`}
      >
        <div className='Frame39642 inline-flex items-center justify-center gap-44'>
          <div className='Tag inline-flex h-5 w-16 flex-col items-start justify-start'>
            <div className='TagRed flex w-16 flex-col items-start justify-center gap-2.5 rounded bg-lime-50 px-2 py-px'>
              <div className="Hypothesis font-['Public Sans'] text-xs font-normal leading-tight text-lime-600">
                Experiment
              </div>
            </div>
          </div>
          <Image src='/svg/graph/Star.svg' width={14} height={14} alt='' />
          <div />
        </div>
        <div className="TheDegradationProblemInPlainNetworksWhereDeeperNetworksHaveHigherTrainingErrorIsAttributedToOptimizationDifficultiesRatherThanVanishingGradients font-['Public Sans'] h-20 w-64 text-xs font-medium leading-tight text-neutral-800">
          The degradation problem in plain networks, where deeper networks have
          higher training error, is attributed to optimization difficulties
          rather than vanishing gradients...More
        </div>
      </div>
      <Handle
        type='target'
        className='!left-0 opacity-0'
        position={Position.Left}
        id='b'
        isConnectable={props.isConnectable}
      />
    </>
  );
});
