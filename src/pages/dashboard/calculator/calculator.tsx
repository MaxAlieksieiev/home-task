import { Stack, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'components/button';
import { VaultService } from 'utils/vaultService';
import { useHistoryOperations } from 'hooks/useHistoryOperations';
import { Operation } from 'core/constants/common';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = ['+', '-', '/', '*'];

export function Calculator() {
  const [input, setInput] = useState('');
  const { history, setHistory } = useHistoryOperations();

  const calculate = useCallback(() => {
    setHistory(history + '=');
    const result = eval(input);
    setInput(result);
  }, [input]);

  const clear = () => {
    setHistory(history + 'C');
    setInput('');
  };

  useEffect(() => {
    const currentOperation = VaultService.getItem(Operation);
    setInput(currentOperation);
  }, []);

  useEffect(() => {
    VaultService.setItem(Operation, input);
  }, [input]);

  return (
    <Stack sx={{ height: 'inherit', justifyContent: 'center', alignItems: ' center' }}>
      <Stack sx={{ gap: '12px', maxWidth: '320px' }}>
        <Stack
          sx={{
            height: '40px',
            border: '1px solid grey',
            padding: '0 8px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
          }}
        >
          <Typography variant='h6'>{input}</Typography>
        </Stack>
        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gridTemplateRows: 'repeat(3, 50px)',
            columnGap: '10px',
            rowGap: '10px',
          }}
        >
          {numbers.map(number => (
            <Button
              title={`${number}`}
              onClick={() => {
                setInput(input + number);
                setHistory(history + number);
              }}
              sx={{ width: 'inherit' }}
              key={number}
            />
          ))}
        </Stack>
        <Stack
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gridTemplateRows: 'repeat(2, 50px)',
            columnGap: '10px',
            rowGap: '10px',
          }}
        >
          {operations.map(operation => (
            <Button
              title={`${operation}`}
              onClick={() => {
                setInput(input + operation);
                setHistory(history + operation);
              }}
              key={operation}
            />
          ))}
          <Button title='=' onClick={calculate} />
          <Button title='C' onClick={clear} />
        </Stack>
      </Stack>
    </Stack>
  );
}
