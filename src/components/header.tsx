import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { Button } from './button';
import { ReactNode } from 'react';
import { useAuth } from 'hooks/useAuth';

interface Props {
  children: ReactNode;
}

export function Header({ children }: Props) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const logoutAction = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <Stack flexDirection='row' sx={{ background: '#eaeaea', padding: '10px 10px', justifyContent: 'space-between' }}>
      {children}
      <Stack flexDirection='row' alignItems='center' columnGap='8px'>
        <Button title='Logout' color='info' onClick={logoutAction} />
        <Typography>{user?.username}</Typography>
      </Stack>
    </Stack>
  );
}
