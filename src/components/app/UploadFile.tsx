import type { UploadFile } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineInbox } from 'react-icons/ai';

const UploadFileArea: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // Handle selected files here
      const files = e.target.files;
      console.log(files);
    },
    []
  );

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Handle dropped files here
    const files = e.dataTransfer.files;
    console.log(files);
  }, []);

  return (
    <div
      className='UploadFileArea flex h-[80%] w-full cursor-pointer flex-col items-center justify-center gap-2.5 rounded-md border-2 border-dashed duration-300 hover:border-sky-500/60'
      onClick={handleFileClick}
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <AiOutlineInbox className='h-[72px] w-[72px] rounded-full bg-sky-500/5 p-3 text-6xl text-sky-500' />
      <div className='text-center'>
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-stone-950">
          Drag & drop files or
        </span>
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-zinc-800">
          {' '}
        </span>
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-sky-500 underline">
          Browse
        </span>
      </div>
      <div className='gap-2.5 p-[5px]'>
        <div className="font-['Public Sans'] text-center text-xs font-normal leading-tight text-neutral-400">
          Supported formats: PDF
        </div>
      </div>
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default function UploadFile() {
  const [uploading, setUploading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const handleUpload = () => {
    console.log('test');
  };
  return (
    <>
      <div className='WhiteBackground flex h-[50vh] w-full flex-col items-center justify-center gap-5 rounded-2xl border border-zinc-300 bg-white p-10'>
        <div className='HeadingUpload flex items-start justify-start gap-2.5 px-2.5'>
          <div className="ExtractDataFromPdfs font-['Public Sans'] text-center text-xl font-medium leading-7 text-stone-950">
            Upload{' '}
          </div>
        </div>
        {/* <input type='file' className='h-[80%] w-full ' accept='.pdf' /> */}

        <UploadFileArea />

        <button
          className=' inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-lg bg-sky-500 px-3.5 py-2 opacity-50'
          disabled={fileList.length === 0}
          onClick={handleUpload}
        >
          <div className="font-['Public Sans'] text-base font-medium leading-normal text-white">
            Generate
          </div>
        </button>
      </div>
    </>
  );
}
