import Image from 'next/image';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type='source'
        className='opacity-0 !right-0'
        position={Position.Right}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className='DagCard w-72 h-36 px-3.5 py-4 bg-white rounded-lg border border-zinc-300 flex-col justify-start items-start gap-3 inline-flex'>
        <div className='Frame39642 justify-center items-center gap-44 inline-flex'>
          <div className='Tag w-16 h-5 flex-col justify-start items-start inline-flex'>
            <div className='TagRed w-16 px-2 py-px bg-lime-50 rounded flex-col justify-center items-start gap-2.5 flex'>
              <div className="Hypothesis text-lime-600 text-xs font-normal font-['Public Sans'] leading-tight">
                Experiment
              </div>
            </div>
          </div>
          <Image src='/svg/graph/Star.svg' width={14} height={14} alt='' />
          <div />
        </div>
        <div className="TheDegradationProblemInPlainNetworksWhereDeeperNetworksHaveHigherTrainingErrorIsAttributedToOptimizationDifficultiesRatherThanVanishingGradients w-64 h-20 text-neutral-800 text-xs font-medium font-['Public Sans'] leading-tight">
          The degradation problem in plain networks, where deeper networks have
          higher training error, is attributed to optimization difficulties
          rather than vanishing gradients...More
        </div>
      </div>
      <Handle
        type='target'
        className='opacity-0 !left-0'
        position={Position.Left }
        id='b'
        isConnectable={isConnectable}
      />
    </>
  );
});
