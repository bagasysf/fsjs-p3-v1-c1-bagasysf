import moment from 'moment/moment';
import { useState } from 'react';

const SmallNavbar = () => {
  const initialState = {
    now: new Date().toISOString(),
  };
  const [date = initialState, setDate] = useState();

  return (
    <>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[5px]">
            <img
              src="../src/assets/icons/time.png"
              className="h-[10px] w-[10px]"
              alt="time"
            />
            <span>{moment(date.now).format('dddd, MMMM Do YYYY')}</span>
          </div>
          <span className="bg-primaryColor p-[10px] text-white">
            Artikel Terbaru
          </span>
          <span>
            Bulughul Maram – Shalat: Tidak Boleh Ada Dua Witir dalam Satu Malam
          </span>
        </div>
        <div className="flex items-center gap-[5px]">
          <div className="border py-[5px] px-[6px]">
            <img
              src="../src/assets/icons/left.png"
              className="w-[5px]"
              alt="left"
            />
          </div>
          <div className="border py-[5px] px-[6px]">
            <img
              src="../src/assets/icons/right.png"
              className="w-[5px]"
              alt="right"
            />
          </div>
          <div className="ml-[10px] flex items-center">
            <img
              src="../src/assets/icons/moon.png"
              alt="moon"
              className="h-auto w-[15px]"
            />
          </div>
          <div className="flex items-center gap-[10px] border-b pr-[20px]">
            <input
              type="text"
              name="search"
              placeholder="Search for"
              className="border-none text-xs"
            />
            <div>
              <img
                src="../src/assets/icons/search.png"
                alt="search"
                className="w-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallNavbar;
