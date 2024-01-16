'use client';

import Footer from '@/components/app/Footer';
import Features from '@/components/app/home/Features';
import Universities from '@/components/app/home/Universities';
import UploadFile from '@/components/app/home/UploadFile';
import UploadPageTitle from '@/components/app/home/UploadPageTitle';
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
      <section className='flex h-[calc(100vh-80px)] flex-col items-center justify-center'>
        <UploadPageTitle />
        <UploadFile />
        <Universities />
      </section>
      <section className='flex flex-col items-center justify-center'>
        <Features />
      </section>

      <Footer></Footer>
    </main>
  );
}
