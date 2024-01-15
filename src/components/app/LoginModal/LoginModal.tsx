import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';
interface LoginModalProps {
  // isOpen,
  // onOpen,
  // onOpenChange
}
const loginIn = {
  title: 'Login In',
  content: <Login></Login>,
  footerTip: 'Don’t have an account? ',
  switch: 'Sign up',
};
const signUp = {
  title: 'Sign upn',
  content: <SignUp></SignUp>,
  footerTip: 'Already have an account? ',
  switch: 'Login In',
};
export default function LoginModal({
  isOpen,
  onOpen,
  onOpenChange,
}: LoginModalProps) {
  const [renderData, setRenderData] = useState(loginIn);
  const hanldeSwitch = () => {
    setRenderData(renderData.title == 'Login In' ? signUp : loginIn);
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <div className='flex justify-center flex-col items-center gap-4 py-3'>
                <h1 className='text-stone-900 text-3xl font-bold '>
                  {renderData.title}
                </h1>
                <div className='text-neutral-400'>
                  Please fill your detail to access your account.
                </div>
                <Button
                  variant='bordered'
                  className='w-full'
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
                  <div className='w-44 h-px bg-slate-200' />
                  <span>or</span>
                  <div className='w-44 h-px bg-slate-200' />
                </div>
                {renderData.content}

                <Button color='primary' className='w-full'>
                  Sign In
                </Button>
                <div>
                  <span>{renderData.footerTip}</span>
                  <span className='text-sky-500 ml-2' onClick={hanldeSwitch}>
                    {renderData.switch}
                  </span>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
function Login() {
  return (
    <>
      <Input type='email' label='Email Address' />
      <Input type='email' label='Password' />
      <div className='flex justify-between'>
        <Checkbox defaultSelected>Option</Checkbox>
        <div>Forgot Password?</div>
      </div>
    </>
  );
}
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
      <div className='flex justify-between'>
        <Checkbox defaultSelected>Option</Checkbox>
        <div>Forgot Password?</div>
      </div>
    </>
  );
}
