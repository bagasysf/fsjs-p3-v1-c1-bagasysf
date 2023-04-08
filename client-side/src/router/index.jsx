import { createBrowserRouter } from 'react-router-dom';
import BaseContent from '../components/BaseContent';
import BaseLayout from '../components/BaseLayout';
import BaseSubContent from '../components/BaseSubContent';
import DetailPage from '../views/DetailPage';
import HomePage from '../views/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <BaseContent />,
        children: [
          {
            path: '',
            element: <BaseSubContent />,
            children: [
              {
                path: '',
                element: <HomePage />,
              },
              {
                path: '/detail/:slug',
                element: <DetailPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
