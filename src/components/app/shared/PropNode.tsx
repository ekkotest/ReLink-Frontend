'use client';
import Image from 'next/image';
import { useState } from 'react';

export interface PropNodeDetail {
  title: string;
  mode: 'graph' | 'table';
  isSaved: boolean;
  content: string;
}

export default function PropNode({ detail }: { detail: PropNodeDetail }) {
  const [isSaved, setIsSaved] = useState(detail.isSaved);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    // Cal API to save/unsave
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        isHovered && 'border-primary'
      } inline-flex w-[17rem] flex-col items-start justify-start gap-3  rounded-lg border bg-white px-3.5 py-4`}
    >
      <div className='flex w-full items-center justify-between'>
        <div className=' rounded bg-lime-50 px-2 py-2 text-xs  text-lime-600 '>
          {detail.title}
        </div>
        <div className='flex items-center gap-1'>
          <Image
            className={isSaved ? 'animate-pulse' : ''}
            onClick={toggleSave}
            src={isSaved ? '/svg/graph/star.svg' : '/svg/graph/unStar.svg'}
            width={14}
            height={14}
            alt=''
          />
        </div>
      </div>
      <div className=" font-['Public Sans'] h-20 w-full text-xs font-medium leading-tight text-neutral-800">
        {detail.content}
      </div>
    </div>
  );
}
