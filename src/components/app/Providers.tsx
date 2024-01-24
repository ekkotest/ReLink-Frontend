// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';

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
          <SignupModalProvider>{children}</SignupModalProvider>
        </LoginModalProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}
