import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import NavbarHero from './NavbarHero.jsx';
import SmallNavbar from './SmallNavbar.jsx';

const BaseLayout = () => {
  return (
    <>
      <div className="mx-[12%]">
        <SmallNavbar />
        <NavbarHero />
        <div className='flex flex-col gap-[40px]'>
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
