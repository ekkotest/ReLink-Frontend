import Image from 'next/image';
import React, { memo, useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export default memo((props: NodeProps) => {
  return (
    <>
      <BaseNode className={props.selected ? 'border-sky-500' : ''}></BaseNode>
      <Handle
        type='source'
        className='!right-0 opacity-0'
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={props.isConnectable}
      />
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

export function BaseNode(props) {
  const [isSave, setIsSave] = useState(1);
  const handleSave = () => {
    setIsSave(isSave + 1);
  };
  return (
    <div
      className={`${props.className}  inline-flex h-36 w-72 flex-col items-start justify-start gap-3  rounded-lg border bg-white px-3.5 py-4`}
    >
      <div className='flex w-full items-center justify-between'>
        <div className=' rounded bg-lime-50 px-2 py-2 text-xs  text-lime-600 '>
          Experiment
        </div>
        <div className='flex items-center gap-1'>
          <span key={isSave} className='animate-shimmer  text-xs text-sky-500'>
            Saved
          </span>
          <Image
            className={isSave ? 'animate-pulse' : ''}
            onClick={handleSave}
            src={isSave % 2 ? '/svg/graph/star.svg' : '/svg/graph/unStar.svg'}
            width={14}
            height={14}
            alt=''
          />
        </div>
      </div>
      <div className=" font-['Public Sans'] h-20 w-64 text-xs font-medium leading-tight text-neutral-800">
        The degradation problem in plain networks, where deeper networks have
        higher training error, is attributed to optimization difficulties rather
        than vanishing gradients...More
      </div>
    </div>
  );
}
