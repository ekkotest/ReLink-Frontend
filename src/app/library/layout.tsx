'use client';
import { Tab, Tabs } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState('propositions');
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const segments = path.split('/');
    const tabKey = segments[segments.length - 1];
    setSelected(tabKey);
  }, [path]);

  const onTabSelected = (key: React.Key) => {
    setSelected(key.toString());
    router.push(`/library/${key}`);
  };

  return (
    <div className='px-12 py-12 '>
      <h1 className='text-2xl font-bold leading-loose  text-neutral-800'>
        Library
      </h1>
      <div className='flex w-full flex-col'>
        <Tabs
          variant='underlined'
          aria-label='Options'
          selectedKey={selected}
          onSelectionChange={onTabSelected}
        >
          <Tab key='propositions' title='Propositions'></Tab>
          <Tab key='pdfs' title='PDFs'></Tab>
        </Tabs>
      </div>
      <div>{children}</div>
    </div>
  );
}
