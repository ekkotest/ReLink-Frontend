import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  const navList = [
    {
      id: 1,
      text: <div className='font-10'>My PDFs</div>,
    },
    {
      id: 2,
      text: ' Responsible Artificial Intelligence: Designing AI For Human Values.PDF',
    },
    {
      id: 3,
      text: ' Responsible Artificial Intelligence: Designing AI For Human Values.PDF',
    },
  ];
  return (
    <div className='w-[222px]  bg-white border-r-1  z-10 h-[calc(100vh-81px)]'>
      {navList.map((nav) => (
        <div
          key={nav.id}
          className='flex items-center justify-between w-[222px] text-xs px-5 py-2'
        >
          <div className='w-30'>{nav.text}</div>
          <Image
            src='/svg/navbar/close.svg'
            width={15}
            height={15}
            alt='Picture of the author'
          />
        </div>
      ))}
    </div>
  );
}
