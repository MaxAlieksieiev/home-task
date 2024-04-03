import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <Stack
      sx={{ width: '100vw', height: '100vh', alignItems: 'center', justifyContent: ' center', background: '#eaeaea' }}
    >
      <Outlet />
    </Stack>
  );
}
