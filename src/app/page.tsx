'use client';

import Link from 'next/link';

import Footer from '@/components/app/Footer';
import UploadFile from '@/components/app/UploadFile';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <section className='bg-white '>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <UploadFile></UploadFile>
          <Link href='/graph'> See /components test page</Link>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
