/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-14 13:44:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-01-14 16:12:22
 * @FilePath: /ReLink-Frontend/src/app/graph/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';
import { Checkbox, CheckboxGroup, Tab, Tabs } from '@nextui-org/react';
import { Key, useState } from 'react';
import { ReactFlowProvider } from 'reactflow';

import LayoutFlow from '../../components/app/graph/DiagramView/DiagramView';
import TableView from '../../components/app/graph/TableVIew/TableVIew';
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
      <section className='pt-5'>
        <div className='px-20'>
          <div className=" font-['Public Sans'] text-2xl font-bold leading-loose text-neutral-800">
            Responsible Artificial Intelligence: Designing AI For Human Values
          </div>
          <div className=' '>
            <span className="font-['Public Sans'] text-base font-bold leading-normal text-black">
              Summary：{' '}
            </span>
            <span className="font-['Public Sans'] text-sm font-normal leading-snug text-black">
              The degradation problem in plain networks, where deeper networks
              have higher training error, is attributed to optimization
              difficulties rather than. The degradation problem in plain
              networks, where deeper networks have higher training error, is
              attributed to optimization difficulties rather than...
            </span>
            <span className="font-['Public Sans'] text-sm font-normal leading-snug text-sky-500">
              Expand
            </span>
            <span className="font-['Public Sans'] text-sm font-normal leading-snug text-black">
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
        <div className='Rectangle1204  rounded bg-[#f1f1f1]'>
          <div className='flex w-full flex-row gap-10 items-center py-2 pl-20'>
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
          <div className='h-[500px]'>
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
