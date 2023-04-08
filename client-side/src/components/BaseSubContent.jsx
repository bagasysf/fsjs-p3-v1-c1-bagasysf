import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const BaseSubContent = () => {
  return (
    <>
      <Outlet />
      <Sidebar />
    </>
  );
};

export default BaseSubContent;
