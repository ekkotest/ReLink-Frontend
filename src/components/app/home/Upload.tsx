import Universities from '@/components/app/home/Universities';
import UploadFile from '@/components/app/home/UploadFile';
import UploadPageTitle from '@/components/app/home/UploadPageTitle';

export default function Upload() {
  return (
    <section className='flex h-[calc(100vh-80px)] flex-col items-center justify-center'>
      <UploadPageTitle />
      <UploadFile />
      <Universities />
    </section>
  );
}
