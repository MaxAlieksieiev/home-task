import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from 'pages/dashboard/dasboard';
import { ReactNode } from 'react';
import { VaultService } from 'utils/vaultService';
import { AuthProvider } from 'context/auth';
import { Login } from 'pages/login/login';
import { AuthLayout } from 'layouts/auth';
import { Calculator } from 'pages/dashboard/calculator/calculator';
import { History } from 'pages/dashboard/history/history';
import { OperationHistoryProvider } from 'context/history';
import './index.css';

export function App() {
  return (
    <AuthProvider>
      <OperationHistoryProvider>
        <Routes>
          <Route path='/' element={<Navigate replace to='/dashboard/calculator' />} />
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
          </Route>
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route
              path='calculator'
              element={
                <ProtectedRoute>
                  <Calculator />
                </ProtectedRoute>
              }
            />
            <Route
              path='history'
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </OperationHistoryProvider>
    </AuthProvider>
  );
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = VaultService.getItem('user');

  if (!user) {
    return <Navigate to='/auth/login' />;
  }
  return children;
}
