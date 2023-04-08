import React from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import Category from '../views/CategoryPage';
import DashboardPage from '../views/DashboardPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '',
        element: <DashboardPage />,
      },
      {
        path: 'categories',
        element: <Category />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        return redirect('/');
      }
      return null;
    },
  },
]);

export default router;
