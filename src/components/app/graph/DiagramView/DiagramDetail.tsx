import { useState } from 'react';
import { Accordion, AccordionItem, Selection } from '@nextui-org/react';

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['2']));
  const itemClasses = {
    base: 'py-0 w-full',
    title: 'font-normal text-medium',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
    indicator: 'text-medium',
    content: 'text-small px-2',
  };

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  const title = () => {
    return <div className='w-[430px]'>sadsadsa</div>;
  };
  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      showDivider={false}
      className='flex w-full max-w-[500px] flex-col gap-1 p-2'
      variant='shadow'
      itemClasses={itemClasses}
    >
      <AccordionItem
        key='1'
        aria-label='Connected devices'
        startContent={<div className='text-primary' />}
        title={title()}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key='2'
        aria-label='Apps Permissions'
        startContent={<div />}
        title='Apps Permissions'
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key='3'
        aria-label='Pending tasks'
        classNames={{ subtitle: 'text-warning' }}
        startContent={<div className='text-warning' />}
        title='Pending tasks'
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
