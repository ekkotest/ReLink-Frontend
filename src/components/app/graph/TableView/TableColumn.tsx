import { TableColumnInterface } from '@/components/app/graph/TableView/interfaces';
import TableItem from '@/components/app/graph/TableView/TableItem';

export default function TableColumn({
  tableColumn,
}: {
  tableColumn: TableColumnInterface;
}) {
  return (
    <div className='min max-h-full min-h-48 w-64 overflow-y-auto overflow-x-hidden bg-zinc-100 pb-5'>
      {/* Title start*/}
      <div className='inline-flex h-14 w-64 flex-col items-start justify-center px-4 py-1'>
        <div className='inline-flex items-center justify-center py-2.5'>
          <div className='inline-flex flex-col items-start justify-start'>
            <div className='flex w-24 flex-col items-start justify-center gap-2.5 rounded bg-rose-50 bg-opacity-0 px-2 py-px'>
              <div className="font-['Public Sans'] text-sm font-medium leading-snug text-neutral-800">
                {tableColumn.title}
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex w-56 items-center justify-center'>
          <div className='inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5' />
        </div>
      </div>
      {/* Title end*/}

      {/* Items start */}
      <div className='flex w-full flex-col items-center'>
        {tableColumn.items.map((item, i) => (
          <TableItem key={i} />
        ))}
      </div>

      {/* Items end */}
    </div>
  );
}
