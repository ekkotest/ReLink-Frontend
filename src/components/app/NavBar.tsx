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
    <div className='border-r-1  z-10 h-[calc(100vh-81px)]  w-[222px] bg-white'>
      {navList.map((nav) => (
        <div
          key={nav.id}
          className='flex w-[222px] items-center justify-between px-5 py-2 text-xs'
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
