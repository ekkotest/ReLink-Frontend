import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import NavBar from '@/components/app/NavBar';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='m-t-[180px] flex'>
      <NavBar></NavBar>
      {children}
    </div>
  );
}
