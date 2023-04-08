const Sidebar = () => {
  return (
    <>
      <div className="col-span-1 ml-[-20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex border p-[40px]">
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="col-span-1">
                <div className="flex items-center gap-[20px] bg-secondaryColor px-[20px] py-[10px] text-xs text-white">
                  <div>
                    <img
                      src="../src/assets/icons/twitter.png"
                      alt="twitter"
                      className="w-[20px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">4378</span>
                    <span>Followers</span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center gap-[20px] bg-secondaryColor px-[20px] py-[10px] text-xs text-white">
                  <div>
                    <img
                      src="../src/assets/icons/youtube.png"
                      alt="twitter"
                      className="w-[20px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">4378</span>
                    <span>Subsriber</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-center gap-[20px] bg-secondaryColor px-[20px] py-[17px] text-xs text-white">
                  <div>
                    <img
                      src="../src/assets/icons/instagram.png"
                      alt="twitter"
                      className="w-[20px]"
                    />
                  </div>
                  <div className="flex gap-[10px]">
                    <span className="font-bold">4378</span>
                    <span>Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border p-[40px]">
            <img
              src="https://rumaysho.com/wp-content/uploads/2022/08/rekening-baru-rumaysho-peduli-indonesia-800x800-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
