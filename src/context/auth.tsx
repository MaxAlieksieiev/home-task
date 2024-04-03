import { ReactNode, createContext, useEffect, useState } from 'react';
import { VaultService } from '../utils/vaultService';
import { User } from '../core/types/user';

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const defaultUser: User = VaultService.getItem('user');
    setUser(defaultUser);
  }, []);

  const login = (user: User) => {
    setUser(user);
    VaultService.setItem('user', user);
  };

  const logout = () => {
    setUser(null);
    VaultService.removeItem('user');
  };

  return <AuthContext.Provider value={{ user, setUser, login, logout }}>{children}</AuthContext.Provider>;
}
