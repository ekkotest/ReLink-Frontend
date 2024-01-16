import Image from 'next/image';

export default function TableView() {
  const list = [1, 2, 34, 5, 4, 6, 7, 8, 9, 10, 23, 32, 424, 34, 34, 324, 5];
  const test = [1, 2, 3, 4, 5];
  return (
    <div className='h-[500px]gap-5 flex overflow-scroll'>
      {list.map((it) => (
        <div
          key={it}
          className='bg-rose-90 inline-block   w-[200px] rounded border bg-opacity-0 p-5'
        >
          <div className='h-10'>Hypothesis</div>
          {test.map((it) => (
            <div
              key={it}
              className='mt-5 flex items-start rounded  border-zinc-300 bg-white p-3'
            >
              <div className='w-[161px]'>
                The degradation problem in plain networks, where deeper networks
                have higher training error, is attributed to optimization
                difficulties rather than.
              </div>
              <Image src='/svg/graph/Star.svg' width={14} height={14} alt='' />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
