import { Accordion, AccordionItem, Image, Selection } from '@nextui-org/react';
import { useState } from 'react';

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['2']));
  const itemClasses = {
    base: 'py-0 w-full',
    // title: 'font-normal text-medium',
    // trigger:
    //   'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
    // indicator: 'text-medium',
    // content: 'text-small px-2',
  };

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  const AccordionContent = [
    {
      key: 1,
      title: 'Locate in File',
      startContent: <Image src='/svg/graph/Pushpin.svg' alt='' />,
    },
    {
      key: 2,
      title: 'Elaborate',
      startContent: <Image src='/svg/graph/UsergroupAdd.svg' alt='' />,
    },
    {
      key: 3,
      title: 'Raise Questions',
      startContent: <Image src='/svg/graph/Bulb.svg' alt='' />,
    },
  ];
  return (
    <div className='bg-'>
      {' '}
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        isCompact
        itemClasses={itemClasses}
        showDivider={false}
        className='flex w-full max-w-[472px] flex-col gap-1 p-2'
        variant='splitted'
      >
        {AccordionContent.map((it) => (
          <AccordionItem
            key={it.key}
            isCompact
            startContent={it.startContent}
            title={<div className='w-[430px]'>{it.title}</div>}
          >
            {defaultContent}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
