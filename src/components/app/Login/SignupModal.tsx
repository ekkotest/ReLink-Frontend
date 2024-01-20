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

const signUp = {
  title: 'Sign up',
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

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validatePassword = (value) => value.length > 6;

  const isEmailInvalid = React.useMemo(() => {
    if (email === '') return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const isPasswordInvalid = React.useMemo(() => {
    if (password === '') return false;

    return validatePassword(password) ? false : true;
  }, [password]);

  const isConfirmPasswordInvalid = React.useMemo(() => {
    if (confirmPassword === '') return false;

    return confirmPassword === password ? false : true;
  }, [confirmPassword, password]);

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
              Sign Up with Google
            </Button>

            <div className='flex items-center gap-3'>
              <div className='h-px w-44 bg-slate-200' />
              <span>or</span>
              <div className='h-px w-44 bg-slate-200' />
            </div>

            <div className='flex justify-between gap-3'>
              <Input
                isRequired
                type='text'
                variant='bordered'
                label='First Name'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                isRequired
                type='text'
                variant='bordered'
                label='Last Name'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Input
              isRequired
              type='email'
              variant='bordered'
              label='Email Address'
              isInvalid={isEmailInvalid}
              color={isEmailInvalid ? 'danger' : undefined}
              errorMessage={isEmailInvalid && 'Please enter a valid email'}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              type='password'
              variant='bordered'
              label='Choose Password'
              isInvalid={isPasswordInvalid}
              color={isPasswordInvalid ? 'danger' : undefined}
              errorMessage={
                isPasswordInvalid && 'Password must be at least 6 characters'
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              isRequired
              type='password'
              variant='bordered'
              label='Confirm Password'
              isInvalid={isConfirmPasswordInvalid}
              color={isConfirmPasswordInvalid ? 'danger' : undefined}
              errorMessage={
                isConfirmPasswordInvalid && 'Password does not match'
              }
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button color='primary' className='w-full'>
              Sign Up
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
