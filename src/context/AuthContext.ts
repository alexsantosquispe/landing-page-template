import { createContext } from 'react';

export type User = {
  name: string;
};

interface AuthContextType {
  user: User | null;
  login: (userCredentials: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
