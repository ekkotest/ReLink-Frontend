// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';

import { DataProvider } from '@/lib/context/data.context';

import {
  AuthProvider,
  LoginModalProvider,
  SignupModalProvider,
} from '@/components/app/Login/context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <LoginModalProvider>
          <SignupModalProvider>
            <DataProvider>{children}</DataProvider>
          </SignupModalProvider>
        </LoginModalProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}
