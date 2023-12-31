'use client';

import Footer from '@/components/app/Footer';
import Header from '@/components/app/Header';
import ButtonLink from '@/components/links/ButtonLink';
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
      <Header></Header>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <ButtonLink className='mt-6' href='/components' variant='light'>
            See /components test page
          </ButtonLink>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
