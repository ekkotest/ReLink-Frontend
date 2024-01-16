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
      content: (
        <div className='p-3'>
          <div> Question 1.</div>

          <div>
            {' '}
            <Image
              src='/svg/graph/Star.svg'
              width={14}
              height={14}
              alt=''
            />{' '}
          </div>
          <div>
            Place holder here, replace before launch product;Place holder here,
            replace before launch product?
          </div>
        </div>
      ),
    },
    {
      key: 2,
      title: 'Elaborate',
      startContent: <Image src='/svg/graph/UsergroupAdd.svg' alt='' />,
      content: <Elaborate></Elaborate>,
    },
    {
      key: 3,
      title: 'Raise Questions',
      startContent: <Image src='/svg/graph/Bulb.svg' alt='' />,
      content: 'dsasa',
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
            {it.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function Elaborate() {
  const list = [
    {
      title: 'Question  1.',
      content:
        '  Place holder here, replace before launch product;Place holder here, replace before launch product?',
    },
    {
      title: 'Question  2.',
      content:
        '  Place holder here, replace before launch product;Place holder here, replace before launch product?',
    },
    {
      title: 'Question  3.',
      content:
        '  Place holder here, replace before launch product;Place holder here, replace before launch product?',
    },
  ];
  return (
    <div className='my-1 flex flex-col justify-evenly gap-2'>
      {list.map((it) => (
        <div key={it.title} className='border-1 rounded-md p-2 '>
          <div className='flex justify-between '>
            <div>{it.title}</div>
            <div>
              <Image src='/svg/graph/Star.svg' width={14} height={14} alt='' />
            </div>
          </div>
          <div>{it.content}</div>
        </div>
      ))}
    </div>
  );
}
