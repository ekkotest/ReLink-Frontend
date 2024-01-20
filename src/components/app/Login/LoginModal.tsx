import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import { useLoginModal, useSignupModal } from '@/components/app/Login/context';

function Login() {
  return (
    <>
      <Input type='email' variant='bordered' label='Email Address' />
      <Input type='email' variant='bordered' label='Password' />
      <div className='flex w-full justify-between'>
        <Checkbox>Remember me</Checkbox>
        <button className='text-primary'>Forgot Password?</button>
      </div>
    </>
  );
}

const loginIn = {
  title: 'Log In',
  content: <Login></Login>,
  footerTip: "Don't have an account?",
  switch: 'Sign up',
};

export default function LoginModal() {
  const hanldeSwitch = () => {
    onLoginOpenChange();
    onSignupOpen();
  };

  const handleGoogle = () => {
    // signIn('google');
    // signOut();
  };
  const { isOpen: isLoginOpen, onOpenChange: onLoginOpenChange } =
    useLoginModal();
  const { isOpen: isSignupOpen, onOpen: onSignupOpen } = useSignupModal();

  return (
    <Modal isOpen={isLoginOpen} onOpenChange={onLoginOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className='flex flex-col items-center justify-center gap-4 p-3'>
                <h1 className='text-3xl font-bold text-stone-900 '>
                  {loginIn.title}
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
                {loginIn.content}

                <Button color='primary' className='w-full'>
                  Sign In
                </Button>
                <div>
                  <span>{loginIn.footerTip}</span>
                  <button className='text-primary ml-2' onClick={hanldeSwitch}>
                    {loginIn.switch}
                  </button>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
