'use client';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

import { auth } from '@/components/app/Login/auth';
import {
  useAuth,
  useLoginModal,
  useSignupModal,
} from '@/components/app/Login/context';
import LoginModal from '@/components/app/Login/LoginModal';
import SignupModal from '@/components/app/Login/SignupModal';

const navigation = [
  { name: 'translate', src: '/svg/header/language.svg' },
  { name: 'headphone', src: '/svg/header/wrapper.svg' },
  { name: 'discord', src: '/svg/header/Vector.svg' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { onOpen: onOpenLogin } = useLoginModal();
  const { onOpen: onOpenSignup } = useSignupModal();
  const handleLogin = () => {
    onOpenLogin();
  };
  const handleSignup = () => {
    onOpenSignup();
  };

  const { isLoggedIn, login, signup, logout } = useAuth();

  const handleAvatar = () => {
    if (auth.currentUser?.photoURL) {
      return auth.currentUser?.photoURL;
    } else {
      return '/svg/header/female.svg';
    }
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
                {isLoggedIn ? (
                  <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                      <div className='flex items-center gap-2'>
                        <Avatar
                          as='button'
                          className='transition-transform'
                          name='Jason Hughes'
                          size='sm'
                          src={handleAvatar()}
                        />
                        {auth.currentUser?.displayName}
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label='Profile Actions'
                      variant='flat'
                      disabledKeys={['profile']}
                    >
                      <DropdownItem key='profile' className='h-14 gap-2'>
                        {auth.currentUser?.email}
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
                      <DropdownItem
                        key='logout'
                        color='danger'
                        onPress={logout}
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <>
                    <Button variant='light' onClick={handleLogin}>
                      Log in
                    </Button>
                    <Button
                      color='primary'
                      variant='solid'
                      onClick={handleSignup}
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
      <LoginModal />
      <SignupModal />
      <div className='relative isolate px-6 pt-[80px] lg:px-8'></div>
    </div>
  );
}
