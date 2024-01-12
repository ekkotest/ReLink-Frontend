import type { UploadFile, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { AiOutlineInbox } from 'react-icons/ai';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
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
        <div className='UploadFileArea flex h-[80%] w-full flex-col items-center justify-center gap-2.5 rounded-md  border-2 border-dashed border-sky-500/60'>
          <AiOutlineInbox className='h-[72px] w-[72px] rounded-full bg-sky-500/5 p-3 text-6xl text-sky-500' />
          <div className=' text-center'>
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
          <div className=' gap-2.5 p-[5px]'>
            <div className="font-['Public Sans'] text-center text-xs font-normal leading-tight text-neutral-400">
              Supported formates: PDF
            </div>
          </div>
        </div>

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
