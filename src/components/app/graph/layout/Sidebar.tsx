'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
interface PdfFile {
  id: number;
  text: string;
}
export default function Sidebar() {
  const [pdfList, setpdfList] = useState<PdfFile[]>([
    {
      id: 2,
      text: ' Responsible Artificial Intelligence: Designing AI For Human Values.PDF',
    },
    {
      id: 4,
      text: ' Responsible21 A',
    },
    {
      id: 5,
      text: ' Responsibl21e A',
    },
    {
      id: 6,
      text: ' Responsi2121ble A',
    },
  ]);
  const [showSidebar, setshowSidebar] = useState(true);
  const handleDelPdf = (e: PdfFile) => {
    const newPdfList: typeof pdfList = [];
    for (let i = 0; i < pdfList.length; i++) {
      const pdf = pdfList[i];
      if (pdf.id !== e.id) {
        newPdfList.push(pdf);
      }
    }
    setpdfList(newPdfList);
  };
  return (
    <div
      className={clsx(
        'border-r-1  z-10 h-[calc(100vh-81px)]  duration-300 bg-white  px-2 py-2',
        showSidebar ? 'w-96' : 'w-28'
      )}
    >
      <div
        className='flex  items-center   cursor-pointer  py-5 text-xs'
        onClick={() => setshowSidebar(!showSidebar)}
      >
        <Image
          src='/svg/library/FilePdf.svg'
          width={30}
          height={30}
          alt='Picture of the author'
        ></Image>
        {showSidebar && (
          <div className='mx-4 text-xl flex-1 whitespace-nowrap'>My PDFs</div>
        )}
        <Image
          className={clsx('duration-300', showSidebar && '-rotate-180')}
          src='/svg/graph/arrow-up.svg'
          width={12}
          height={12}
          alt='Picture of the author'
        />
      </div>
      {showSidebar &&
        pdfList.map((pdf) => (
          <div key={pdf.id} className='flex  items-center   py-3 text-xs'>
            <Image
              className='flex-shrink'
              src='/svg/library/FilePdf.svg'
              width={15}
              height={15}
              alt='Picture of the author'
            ></Image>
            <div className='w-30 flex-1 mx-3'>{pdf.text}</div>
            <Image
              className='cursor-pointer'
              src='/svg/graph/close.svg'
              width={15}
              height={15}
              alt='Picture of the author'
              onClick={() => handleDelPdf(pdf)}
            />
          </div>
        ))}
    </div>
  );
}
