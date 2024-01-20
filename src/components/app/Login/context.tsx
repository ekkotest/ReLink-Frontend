import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext, useState } from 'react';

import { auth } from '@/components/app/Login/auth';

// create a context for the authentication
const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {
    // Perform login logic (e.g., call your authentication API)
    // Set isLoggedIn to true if login is successful
  },
  signup: (email: string, password: string) => {
    // Perform signup logic (e.g., call your authentication API)
    // Set isLoggedIn to true if signup is successful
  },
  logout: () => {
    // Perform logout logic (e.g., clear authentication token)
    // Set isLoggedIn to false
  },
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('Signed up user:', user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// create a context for the login modal
const LoginModalContext = createContext({
  isOpen: false,
  onOpen: () => {
    // Open the modal
  },
  onOpenChange: () => {
    // Open the modal
  },
});

export const LoginModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOpenChange = () => {
    setIsOpen(false);
  };

  return (
    <LoginModalContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
      {children}
    </LoginModalContext.Provider>
  );
};

export const useLoginModal = () => {
  return useContext(LoginModalContext);
};

// create a context for the signup modal
const SignupModalContext = createContext({
  isOpen: false,
  onOpen: () => {
    // Open the modal
  },
  onOpenChange: () => {
    // Open the modal
  },
});

export const SignupModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOpenChange = () => {
    setIsOpen(false);
  };

  return (
    <SignupModalContext.Provider value={{ isOpen, onOpen, onOpenChange }}>
      {children}
    </SignupModalContext.Provider>
  );
};

export const useSignupModal = () => {
  return useContext(SignupModalContext);
};
