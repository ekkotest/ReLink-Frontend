import {
  Button,
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
} from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AiOutlineInbox } from 'react-icons/ai';

import { postFileUpload } from '@/api/home';
interface UploadFileAreaProps {
  fileStatusList: FileStatusList[];
  setFileStatusList: React.Dispatch<React.SetStateAction<FileStatusList[]>>;
}
const UploadFileArea = ({
  setFileStatusList,
  fileStatusList,
}: UploadFileAreaProps) => {
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
      if (files) fileChange(files);
    },
    [fileStatusList]
  );
  const handleFileDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      // Handle dropped files here
      const files = e.dataTransfer.files;
      setIsDragOver(false);
      if (files) fileChange(files);
    },
    [fileStatusList]
  );
  const fileChange = async (files: FileList) => {
    if (!files) return;
    const newfileStatusList: FileStatusList[] = [];

    Array.from(files).forEach((file) => {
      newfileStatusList.push({
        progress: 0,
        status: 'loading',
        key: newfileStatusList.length + fileStatusList.length,
        file: file,
        isAbort: false,
      });
    });

    setFileStatusList((list) => {
      return list.concat(newfileStatusList);
    });
    for (let i = 0; i < newfileStatusList.length; i++) {
      const fileStatus = newfileStatusList[i];
      const formData = new FormData();
      if (fileStatus.isAbort) {
        console.log('not upload');
        continue;
      }
      formData.append('file', fileStatus.file);
      const onprogress = (e) => {
        setFileStatusList((fileStatusList) => {
          for (let i = 0; i < fileStatusList.length; i++) {
            const item = fileStatusList[i];
            if (item.key === fileStatus.key) {
              if (e == 100) {
                item.status = 'loaded';
              }
              item.progress = e;
              break;
            }
          }
          return [...fileStatusList];
        });
      };
      const abortCb = (abort) => {
        fileStatus.abort = abort;
      };
      // The last request is completed before the next request is made
      try {
        await postFileUpload(formData, onprogress, abortCb).catch(() => {
          setFileStatusList((fileStatusList) => {
            for (let i = 0; i < fileStatusList.length; i++) {
              const item = fileStatusList[i];
              if (item.key === fileStatus.key) {
                item.status = 'failed';
                break;
              }
            }
            return [...fileStatusList];
          });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const [isDragOver, setIsDragOver] = useState(false);
  const onDragOver = (e) => {
    setIsDragOver(true);
    e.preventDefault();
  };
  return (
    <div
      className={clsx(
        'hover:border-primary/60 p-8 flex h-[80%] w-[60vw] cursor-pointer flex-col items-center justify-center gap-2.5 rounded-md border-2 border-dashed duration-300',
        { 'border-red-500': isDragOver }
      )}
      onClick={handleFileClick}
      onDrop={handleFileDrop}
      onDragOver={onDragOver}
    >
      {!fileStatusList.length && (
        <AiOutlineInbox className='h-[72px] w-[72px] rounded-full bg-primary/5 p-3 text-6xl text-primary' />
      )}
      <div className='text-center'>
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-stone-950">
          Drag & drop files or
        </span>{' '}
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-zinc-800"></span>
        <span className="font-['Public Sans'] text-base font-normal leading-normal text-primary underline">
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
        multiple
        accept='.pdf'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};
interface UploadFileListProps {
  fileStatusList: FileStatusList[];
  setFileStatusList: React.Dispatch<React.SetStateAction<FileStatusList[]>>;
}
const UploadFileList = ({
  fileStatusList,
  setFileStatusList,
}: UploadFileListProps) => {
  const loadingfileList = useMemo(() => {
    return fileStatusList.filter((item) => item.status === 'loading');
  }, [fileStatusList]);
  const failedFileList = useMemo(() => {
    return fileStatusList.filter((item) => item.status === 'failed');
  }, [fileStatusList]);
  const loadedFileList = useMemo(() => {
    return fileStatusList.filter((item) => item.status === 'loaded');
  }, [fileStatusList]);
  const delLoadedFile = (key, doAbort) => {
    const list: typeof fileStatusList = [];
    for (let i = 0; i < fileStatusList.length; i++) {
      const fileStatus = fileStatusList[i];
      if (key !== fileStatus.key) {
        list.push(fileStatus);
      } else if (doAbort) {
        fileStatus.isAbort = true;
        console.log('isAbort true', fileStatus.abort);
        if (fileStatus.abort) {
          console.log('cancel progress');
          fileStatus.abort.abort();
        }
      }
    }
    setFileStatusList(list);
  };

  return (
    <div className='w-full gap-3 flex flex-col'>
      {!!loadingfileList.length && (
        <div>
          <div className='text-left'>Uploading - 3/3 files</div>
          {loadingfileList.map((item) => (
            <div key={item.key} className='relative '>
              <div className='flex justify-between items-center px-4 py-2 mt-2  rounded border bg-red '>
                {item.file.name}
                <Image
                  className='cursor-pointer'
                  onClick={() => delLoadedFile(item.key, true)}
                  src='/svg/home/CloseCircle.svg'
                  width={15}
                  height={15}
                  alt='CloseCircle'
                ></Image>
              </div>
              <Progress
                aria-label='Close'
                size='sm'
                radius='sm'
                classNames={{
                  base: 'absolute -bottom-[0.5px] ',
                  track: ' border ',
                  value: 'text-foreground/60',
                }}
                value={item.progress}
              />
            </div>
          ))}
        </div>
      )}
      {!!failedFileList.length && (
        <div>
          <div className='text-left'>FiledLoad</div>
          {failedFileList.map((item) => (
            <div
              className='flex justify-between items-center px-4 py-2 mt-2  rounded border border-red-500'
              key={item.key}
            >
              {item.file.name}
              <Image
                className='cursor-pointer'
                onClick={() => delLoadedFile(item.key, false)}
                src='/svg/home/DeleteOutlined.svg'
                width={15}
                height={15}
                alt='DeleteOutlined'
              ></Image>
            </div>
          ))}
        </div>
      )}
      {!!loadedFileList.length && (
        <div>
          <div className='text-left'>Uploaded</div>
          {loadedFileList.map((item) => (
            <div
              key={item.key}
              className='flex justify-between items-center px-4 py-2 mt-2  rounded border border-lime-500'
            >
              <span> {item.file.name}</span>
              <Image
                className='cursor-pointer'
                onClick={() => delLoadedFile(item.key, false)}
                src='/svg/home/DeleteOutlined.svg'
                width={15}
                height={15}
                alt='DeleteOutlined'
              ></Image>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface FileStatusList {
  file: File;
  progress: number;
  key: number;
  abort?: XMLHttpRequest;
  isAbort: boolean;
  status: 'loaded' | 'failed' | 'loading';
}
export default function UploadFile() {
  const [fileStatusList, setFileStatusList] = useState<FileStatusList[]>([]);
  const [checkDetail, setCheckDetail] = useState<string[]>(['normal']);
  const router = useRouter();

  const handleUpload = () => {
    router.push('/graph');
  };
  const loadedFileList = useMemo(() => {
    return fileStatusList.filter((item) => item.status === 'loaded');
  }, [fileStatusList]);

  const onCheckChange = (values) => {
    if (values.length > 1) setCheckDetail([values[1]]);
  };
  return (
    <div className='layout relative flex  flex-col items-center justify-center py-12 text-center'>
      <div className='WhiteBackground flex min-h-[50vh] w-full flex-col items-center justify-center gap-5 rounded-2xl border border-zinc-300 bg-white p-10'>
        <div className='HeadingUpload flex items-start justify-start gap-2.5 px-2.5'>
          <div className="ExtractDataFromPdfs font-['Public Sans'] text-center text-xl font-medium leading-7 text-stone-950">
            Extract data from PDFs
          </div>
        </div>
        {/* <input type='file' className='h-[80%] w-full ' accept='.pdf' /> */}
        <UploadFileArea
          fileStatusList={fileStatusList}
          setFileStatusList={setFileStatusList}
        />
        <UploadFileList
          fileStatusList={fileStatusList}
          setFileStatusList={setFileStatusList}
        ></UploadFileList>
        {!!loadedFileList.length && (
          <>
            <div className='flex items-center gap-1 mt-8 text-xl font-bold'>
              How much detail would you like?
              <Popover backdrop='blur' placement='right'>
                <PopoverTrigger>
                  <Image
                    className='cursor-pointer'
                    src='/svg/home/mdi_information-outline.svg'
                    width={20}
                    height={20}
                    alt='CloseCircle'
                  ></Image>
                </PopoverTrigger>
                <PopoverContent>
                  <div className='w-96 p-5 flex flex-col gap-3 text-neutral-800 text-base font-normal leading-normal'>
                    <div className=' text-xl font-bold'>
                      How much detail would you like?
                    </div>
                    <div className='text-tiny'>
                      Select the amount of detail you would like to have in your
                      article summary.
                    </div>
                    <li className='text-tiny'>
                      For a faster reading, select "Concise" so we will generate
                      a shorter summary with fewer propositions.
                    </li>
                    <li className='text-tiny'>
                      For capturing all key points, select "Detail" so we will
                      generate a longer summary with more propositions.
                    </li>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <CheckboxGroup
              className='my-4'
              orientation='horizontal'
              value={checkDetail}
              radius='full'
              onChange={onCheckChange}
            >
              <Checkbox value='concise'>Concise </Checkbox>
              <Checkbox value='normal'>Normal </Checkbox>
              <Checkbox value='detail'>Detail </Checkbox>
            </CheckboxGroup>
          </>
        )}

        <div className='w-full'>
          <Button
            isDisabled={!loadedFileList.length}
            className='w-full text-base font-medium leading-normal'
            color='primary'
            radius='sm'
            size='md'
            aria-label='Close'
            onClick={handleUpload}
          >
            Generate
          </Button>
        </div>
      </div>
    </div>
  );
}
