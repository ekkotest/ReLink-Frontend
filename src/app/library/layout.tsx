'use client';
import { Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const getTabKey = (path: string) => {
  const segments = path.split('/');
  return segments[segments.length - 1];
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();

  const [selected, setSelected] = useState(getTabKey(path));

  useEffect(() => {
    setSelected(getTabKey(path));
  }, [path]);

  const onTabSelected = (key: React.Key) => {
    setSelected(key.toString());
    router.push(`/library/${key}`);
  };

  return (
    <div className='px-12 py-12'>
      <h1 className='text-2xl font-bold leading-loose  text-neutral-800'>
        Library
      </h1>
      <Tabs
        className='-ml-4 mb-8'
        color='primary'
        variant='underlined'
        aria-label='Options'
        selectedKey={selected}
        onSelectionChange={onTabSelected}
      >
        <Tab key='propositions' title='Propositions'></Tab>
        <Tab key='pdfs' title='PDFs'></Tab>
      </Tabs>
      {children}
    </div>
  );
}
