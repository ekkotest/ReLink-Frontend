import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <Spinner label='Loading...' className='flex flex-grow items-center h-2/3' />
  );
}
