'use client';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

import LoginModal from '@/components/app/LoginModal/LoginModal';

const navigation = [
  { name: 'Product', src: '/svg/header/language.svg' },
  { name: 'Product', src: '/svg/header/wrapper.svg' },
  { name: 'Product', src: '/svg/header/Vector.svg' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loginStatus, setloginStatus] = useState(true);
  const handleSignIn = () => {
    onOpen();
    // setloginStatus(!loginStatus);
  };
  return (
    <div>
      <header className='fixed inset-x-0 top-0 z-50 border-b shadow  backdrop-blur '>
        <nav
          className='flex h-[80px] w-full items-center justify-between  px-12   '
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Image
              src='/svg/header/relink.svg'
              width={30}
              height={30}
              alt=''
            ></Image>
            <span className='ml-4 '>RELINK</span>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
            </button>
          </div>

          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <div className='hidden lg:flex lg:gap-x-6'>
              {navigation.map((item) => (
                <Image
                  key={item.src}
                  src={item.src}
                  width={15}
                  height={15}
                  alt=''
                ></Image>
              ))}
              <div className='flex items-center gap-2'>
                {loginStatus ? (
                  <>
                    <Dropdown placement='bottom-end'>
                      <DropdownTrigger>
                        <div
                          className='flex items-center gap-2'
                          onClick={handleSignIn}
                        >
                          <Avatar
                            as='button'
                            className='transition-transform'
                            name='Jason Hughes'
                            size='sm'
                            src='/svg/header/female.svg'
                          />
                          William Wang
                        </div>
                      </DropdownTrigger>
                      <DropdownMenu aria-label='Profile Actions' variant='flat'>
                        <DropdownItem key='profile' className='h-14 gap-2'>
                          <p className='font-semibold'>Signed in as</p>
                          <p className='font-semibold'>zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key='settings'>My Saves</DropdownItem>
                        <DropdownItem key='team_settings'>
                          Edit Profile
                        </DropdownItem>
                        <DropdownItem key='analytics'>
                          Setting & Privacy
                        </DropdownItem>
                        <DropdownItem key='help_and_feedback'>
                          Help & Support
                        </DropdownItem>
                        <DropdownItem key='logout' color='danger'>
                          Log Out
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <div onClick={handleSignIn}>Login in</div>
                    <Button
                      color='primary'
                      variant='solid'
                      onClick={handleSignIn}
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <LoginModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      ></LoginModal>
      <div className='relative isolate px-6 pt-[80px] lg:px-8'>
        {/* <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
    </div>
  );
}
