import Dropdown from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from '../actions/actionCreator';

const Navbar = () => {
  const { isLoading, categories, error } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchCategory());
    })();
  }, []);
  // console.log(isLoading, categories, error);

  return (
    <>
      <div className="flex items-center gap-[20px] bg-secondaryColor">
        <div className="bg-primaryColor p-[22px]">
          <img
            src="../src/assets/icons/home-white.png"
            alt="home"
            className="w-[20px] text-white"
          />
        </div>
        <ul className="flex gap-[40px] py-[20px] font-medium text-white">
          <Dropdown isLoading={isLoading} categories={categories} />
          <li>Nasihat Khutbah</li>
          <li>Hukum Islam</li>
          <li>Biro Jodoh</li>
          <li>Rumaysho Peduli</li>
          <li>Rumaysho Academy</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
