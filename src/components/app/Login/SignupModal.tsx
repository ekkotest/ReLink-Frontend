import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import { useLoginModal, useSignupModal } from '@/components/app/Login/context';

function SignUp() {
  return (
    <>
      <div className='flex justify-between gap-3'>
        <Input type='email' label='Email Address' />
        <Input type='email' label='Password' />
      </div>
      <Input type='email' label='Password' />
      <Input type='email' label='Password' />
      <Input type='email' label='Password' />
    </>
  );
}
const signUp = {
  title: 'Sign up',
  content: <SignUp></SignUp>,
  footerTip: 'Already have an account? ',
  switch: 'Login In',
};
export default function SignupModal() {
  const handleGoogle = () => {
    // signIn('google');
    // signOut();
  };

  const handleSwitch = () => {
    onSignupOpenChange();
    onLoginOpen();
  };
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onOpenChange: onLoginOpenChange,
  } = useLoginModal();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onOpenChange: onSignupOpenChange,
  } = useSignupModal();

  return (
    <Modal isOpen={isSignupOpen} onOpenChange={onSignupOpenChange}>
      <ModalContent>
        <ModalBody>
          <div className='flex flex-col items-center justify-center gap-4 p-3'>
            <h1 className='text-3xl font-bold text-stone-900 '>
              {signUp.title}
            </h1>
            <div className='text-neutral-400'>
              Please fill your detail to access your account.
            </div>
            <Button
              variant='bordered'
              className='w-full'
              onClick={handleGoogle}
              startContent={
                <Image
                  src='/svg/common/Google.svg'
                  width={14}
                  height={14}
                  alt=''
                />
              }
            >
              Continue with Google
            </Button>

            <div className='flex items-center gap-3'>
              <div className='h-px w-44 bg-slate-200' />
              <span>or</span>
              <div className='h-px w-44 bg-slate-200' />
            </div>
            {signUp.content}

            <Button color='primary' className='w-full'>
              Sign In
            </Button>
            <div>
              <span>{signUp.footerTip}</span>
              <button className='text-primary ml-2' onClick={handleSwitch}>
                {signUp.switch}
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
