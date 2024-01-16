'use client';

import Footer from '@/components/app/Footer';
import Features from '@/components/app/home/Features';
import Upload from '@/components/app/home/Upload';
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
    <main className='flex flex-col items-center justify-center'>
      <Upload />
      <Features />
      <Footer />
    </main>
  );
}
