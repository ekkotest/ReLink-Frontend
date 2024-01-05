'use client';

import clsx from 'clsx';
import React from 'react';

export default function ComponentPage() {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  return (
    <main>
      <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-white')}>
        components
      </section>
    </main>
  );
}
