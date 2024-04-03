import { useContext } from 'react';
import { OperationHistoryContext } from 'context/history';

export const useHistoryOperations = () => {
  const context = useContext(OperationHistoryContext);
  if (context === null) {
    throw new Error('useHistoryOperations must be used within an OperationHistoryProvider');
  }
  return context;
};
