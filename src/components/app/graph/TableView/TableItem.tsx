import Image from 'next/image';

export default function TableItem() {
  return (
    <div className='mb-2.5 inline-flex w-56 flex-col items-start justify-start gap-3 rounded-lg border border-zinc-300 bg-white px-3.5 py-4'>
      <div className='inline-flex items-start justify-start gap-3'>
        <div className="font-['Public Sans'] w-40 text-xs font-medium leading-tight text-neutral-800">
          The degradation problem in plain networks, where deeper networks have
          higher training error, is attributed to optimization difficulties
          rather than.
        </div>
        <div className='flex items-center justify-center gap-44'>
          <Image src='/svg/graph/Star.svg' width={14} height={14} alt='' />
        </div>
      </div>
    </div>
  );
}
