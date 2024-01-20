import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useContext, useState } from 'react';

import { auth } from '@/components/app/Login/auth';

// create a context for the authentication
const AuthContext = createContext({
  isLoggedIn: false,

  login: (email: string, password: string, setErrorFirebase) => {
    // Perform login logic (e.g., call your authentication API)
    // Set isLoggedIn to true if login is successful
  },
  signup: (email: string, password: string, setErrorFirebase) => {
    // Perform signup logic (e.g., call your authentication API)
    // Set isLoggedIn to true if signup is successful
  },
  signupWithGoogle: () => {
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

  const login = (email: string, password: string, setErrorFirebase: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorFirebase(errorCode);
      });
  };

  const signup = (email: string, password: string, setErrorFirebase: any) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log('Signed up user:', user);
        // ...
        setIsLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        // console.log('Error signing up:', errorCode, errorMessage);
        setErrorFirebase(errorCode);
      });
  };

  const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log('user', user);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, signup, signupWithGoogle, logout }}
    >
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
