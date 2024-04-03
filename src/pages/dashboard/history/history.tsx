import { useMemo } from 'react';
import { Stack, Typography } from '@mui/material';
import { Button } from 'components/button';
import { useHistoryOperations } from 'hooks/useHistoryOperations';

export function History() {
  const { history, clearHistory } = useHistoryOperations();

  const historyArray = useMemo(() => {
    if (history) {
      return history?.split('').slice(-20);
    }
    return [];
  }, [history]);

  return (
    <Stack padding='10px'>
      {!Boolean(historyArray.length) && <Typography>History is empty</Typography>}
      {Boolean(historyArray.length) && (
        <>
          <Button title='Clear history' onClick={clearHistory} sx={{ maxWidth: '200px', marginLeft: 'auto' }} />
          {historyArray.map((item: string, index: number) => (
            <Stack flexDirection='row' gap='4px' key={index}>
              <Typography>{index + 1}.</Typography>
              <Typography>{item}</Typography>
            </Stack>
          ))}
        </>
      )}
    </Stack>
  );
}
