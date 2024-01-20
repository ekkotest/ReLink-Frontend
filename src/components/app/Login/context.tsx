import { createContext, useContext, useState } from 'react';

// create a context for the authentication
const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {
    // Perform login logic (e.g., call your authentication API)
    // Set isLoggedIn to true if login is successful
  },
  signup: () => {
    // Perform signup logic (e.g., call your registration API)
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

  const signup = () => {
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
