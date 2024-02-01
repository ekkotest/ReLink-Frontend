'use client';

import { useEffect } from 'react';

import { useData, useDataDispatch } from '@/lib/context/data.context';
import { DataAction } from '@/lib/interfaces';

import PropNode from '@/components/app/shared/PropNode';

export default function Page() {
  const data = useData();
  const dispatch = useDataDispatch();

  useEffect(() => {
    fetch('/api/proposition/get-library-proposition')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((res) => {
        dispatch({
          type: DataAction.GET_LIB_PROPOSITION,
          response: res,
        });
      });
  }, []);

  return (
    <div className='flex h-full w-full flex-row flex-wrap gap-10'>
      {data.generatePropNodes('graph').map((t, i) => (
        <PropNode key={i} detail={t} />
      ))}
    </div>
  );
}
