'use client';
import { Checkbox, CheckboxGroup, Tab, Tabs } from '@nextui-org/react';
import { Key, useState } from 'react';
import { ReactFlowProvider } from 'reactflow';

import LayoutFlow from '@/components/app/graph/DiagramView/DiagramView';
import TableView from '@/components/app/graph/TableView/TableView';

export default function GraphPage() {
  const optionsWithDisabled = [
    {
      label: 'Diagram View',
      value: 'graph',
    },
    {
      label: 'Table View',
      value: 'tableView',
    },
  ];
  const checkHeaher = [
    {
      label: 'Hypothesis',
      value: 'Hypothesis',
    },
    {
      label: 'Observation',
      value: 'Observation',
    },
    {
      label: 'Experiment',
      value: 'Experiment',
    },
    {
      label: 'Theory',
      value: 'Theory',
    },
  ];
  const [selectView, setSelectView] = useState<Key>('graph');

  return (
    <main>
      <section className='flex flex-col pt-5 h-full box-border'>
        <div className='px-20'>
          <div className='  text-2xl font-bold leading-loose text-neutral-800'>
            Responsible Artificial Intelligence: Designing AI For Human Values
          </div>
          <div className=' '>
            <span className=' text-base font-bold leading-normal text-black'>
              Summary：{' '}
            </span>
            <span className=' text-sm font-normal leading-snug text-black'>
              The degradation problem in plain networks, where deeper networks
              have higher training error, is attributed to optimization
              difficulties rather than. The degradation problem in plain
              networks, where deeper networks have higher training error, is
              attributed to optimization difficulties rather than...
            </span>
            <span className=' text-primary text-sm font-normal leading-snug'>
              Expand
            </span>
            <span className=' text-sm font-normal leading-snug text-black'>
              {' '}
            </span>
          </div>
          <Tabs
            className='-ml-3 mb-2'
            variant='underlined'
            color='primary'
            aria-label='Tabs variants'
            size='sm'
          >
            <Tab key='Concise' title='Concise' />
            <Tab key='Normal' title='Normal' />
            <Tab key='Detail' title='Detail' />
          </Tabs>
        </div>
        <div className=' rounded  bg-neutral-50 flex-1 flex flex-col'>
          <div className='flex w-full flex-row items-center gap-10 py-2 pl-20'>
            <Tabs
              aria-label='Options base'
              className='tabContent'
              color='primary'
              size='sm'
              onSelectionChange={setSelectView}
            >
              {optionsWithDisabled.map((it) => {
                return <Tab key={it.value} title={it.label}></Tab>;
              })}
            </Tabs>
            <CheckboxGroup
              size='sm'
              orientation='horizontal'
              defaultValue={['buenos-aires', 'san-francisco']}
            >
              {checkHeaher.map((it) => (
                <Checkbox value={it.value} key={it.value} radius='sm'>
                  {it.label}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </div>
          <div className='flex-1'>
            {selectView === 'graph' ? (
              <ReactFlowProvider>
                <LayoutFlow />
              </ReactFlowProvider>
            ) : (
              <TableView />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
