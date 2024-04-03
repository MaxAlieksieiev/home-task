import { useLocation } from 'react-router-dom';
import { Stack, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';
import { useMemo } from 'react';
import { Header } from 'components/header';
import { VaultService } from 'utils/vaultService';
import { useHistoryOperations } from 'hooks/useHistoryOperations';

const tabs = ['calculator', 'history'];

export function Dashboard() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { history } = useHistoryOperations();

  const activeTab = useMemo(() => {
    for (let i = 0; i < tabs.length; i += 1) {
      const pattern = tabs[i];
      if (pathname.endsWith(pattern)) {
        return pattern;
      }
    }
  }, [pathname]);

  return (
    <Stack>
      <Header>
        <Tabs
          value={activeTab}
          onChange={(_e, value) => {
            navigate(value);
            if (value === 'history') {
              VaultService.setItem('history', history);
            }
          }}
        >
          <Tab label='Calculator' value={tabs[0]} />
          <Tab label='History' value={tabs[1]} />
        </Tabs>
      </Header>
      <Stack sx={{ width: '100%', height: 'calc(100vh - 68px)' }}>
        <Outlet />
      </Stack>
    </Stack>
  );
}
