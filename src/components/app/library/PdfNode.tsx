'use client';
import Image from 'next/image';

export default function PdfNode({ title }: { title: string }) {
  return (
    <div className='inline-flex h-40 max-w-[17rem] flex-col items-start justify-start gap-2 rounded-lg  py-5 pl-5 pr-2.5'>
      <Image
        className='relative'
        src='/svg/library/FilePdf.svg'
        width={36}
        height={36}
        alt='pdf icon'
      />
      <div className="font-['Public Sans'] w-60 text-base font-normal leading-normal text-neutral-800">
        {title}
      </div>
    </div>
  );
}
