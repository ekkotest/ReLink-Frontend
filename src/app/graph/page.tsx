'use client';
import {
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Pagination,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { useState } from 'react';
import { ReactFlowProvider } from 'reactflow';

import LayoutFlow from '../../components/app/graph/DiagramView/DiagramView';
import TableView from '../../components/app/graph/TableVIew/TableVIew';
export default function GraphPage() {
  const items = [
    {
      key: '1',
      label: 'Concise',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Normal(5 credits)',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Detail(10 credits)',
      children: 'Content of Tab Pane 3',
    },
  ];
  const [value4, setValue4] = useState('graph');
  const optionsWithDisabled = [
    {
      label: 'Diagram View',
      value: 'graph',
      render: () => (
        <ReactFlowProvider>
          <LayoutFlow />
        </ReactFlowProvider>
      ),
    },
    {
      label: 'Table View',
      value: 'tableView',
      render: () => <TableView />,
    },
  ];
  const variants = [
    "solid",
    "underlined",
    "bordered",
    "light",
  ];
  return (
    <main>
      <section className='p-10'>
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
            difficulties rather than. The degradation problem in plain networks,
            where deeper networks have higher training error, is attributed to
            optimization difficulties rather than...
          </span>
          <span className="font-['Public Sans'] text-sm font-normal leading-snug text-sky-500">
            Expand
          </span>
          <span className="font-['Public Sans'] text-sm font-normal leading-snug text-black">
            {' '}
          </span>
        </div>
          <Tabs  variant='underlined' aria-label="Tabs variants">
            <Tab key="photos" title="Photos"/>
            <Tab key="music" title="Music"/>
            <Tab key="videos" title="Videos"/>
          </Tabs>
        <div className='flex w-full flex-col'>
          <Tabs aria-label='Options base' items={[123]} className='tabContent'>
            {optionsWithDisabled.map((it) => {
              return (
                <Tab key={it.value} title={it.label}>
                  <Card>
                    <CardBody>
                      <div style={{ height: '400px' }}>{it.render()}</div>
                    </CardBody>
                  </Card>
                </Tab>
              );
            })}
          </Tabs>
          <CheckboxGroup
            orientation='horizontal'
            color='secondary'
            defaultValue={['buenos-aires', 'san-francisco']}
          >
            <Checkbox value='buenos-aires'>Buenos Aires</Checkbox>
            <Checkbox value='sydney'>Sydney</Checkbox>
            <Checkbox value='san-francisco'>San Francisco</Checkbox>
            <Checkbox value='london'>London</Checkbox>
            <Checkbox value='tokyo'>Tokyo</Checkbox>
          </CheckboxGroup>
        </div>

        <Pagination total={10} initialPage={1} />
      </section>
    </main>
  );
}
