import { ReactNode, createContext, useEffect, useState } from 'react';
import { VaultService } from 'utils/vaultService';

type OperationHistoryContextType = {
  setHistory: (history: string) => void;
  clearHistory: () => void;
  history: string;
};

export const OperationHistoryContext = createContext<OperationHistoryContextType | null>(null);

export function OperationHistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<string>('');

  const clearHistory = () => {
    setHistory('');
    VaultService.removeItem('history');
  };

  useEffect(() => {
    const currentHistory = VaultService.getItem('history');
    setHistory(currentHistory);
  }, []);

  return (
    <OperationHistoryContext.Provider value={{ history, setHistory, clearHistory }}>
      {children}
    </OperationHistoryContext.Provider>
  );
}
