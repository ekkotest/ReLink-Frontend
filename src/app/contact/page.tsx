'use client';
import { Button, Input, Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
export default function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const queryData = {
    message: '',
    name: '',
    email: '',
  };

  const handleSubmit = () => {
    if (queryData.message.length < 5) {
      setErrorMessage('The Message should be at least 5 characters long.');
      return;
    } else {
      setErrorMessage('');
    }
    console.log(queryData);
  };
  return (
    <div className='flex flex-col items-center gap-10  mt-32 '>
      <h1 className='text-3xl font-bold'>Please leave your message here</h1>
      <div className='text-neutral-400  '>
        Tell us if you need any support or have feedback to share. We will
        respond ASAP.
      </div>
      <Textarea
        isRequired
        label='Message'
        variant='bordered'
        minRows={6}
        maxRows={16}
        radius='sm'
        errorMessage={errorMessage}
        onValueChange={(e) => (queryData.message = e)}
        classNames={{
          base: 'w-1/2 ',
          input: 'resize-y min-h-[40px]',
        }}
      />
      <div className='flex justify-between gap-10 w-1/2 -mt-4'>
        <Input
          type='email'
          variant='bordered'
          radius='sm'
          label='Name (Optional)'
          onValueChange={(e) => (queryData.name = e)}
        />
        <Input
          type='email'
          radius='sm'
          variant='bordered'
          label='Email Address (Optional)'
          onValueChange={(e) => (queryData.email = e)}
        />
      </div>
      <Button color='primary' radius='sm' onClick={handleSubmit}>
        Submit Now
      </Button>
    </div>
  );
}
