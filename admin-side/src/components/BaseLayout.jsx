import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <>
      <div className="grid grid-cols-12 bg-primaryDarkColor min-h-screen">
        <Sidebar />
        <div className="col-span-10">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
