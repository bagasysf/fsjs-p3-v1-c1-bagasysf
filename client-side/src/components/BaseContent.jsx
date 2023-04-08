import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const BaseContent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[40px] pb-[40px]">
        <Outlet />
      </div>
    </>
  );
};

export default BaseContent;
