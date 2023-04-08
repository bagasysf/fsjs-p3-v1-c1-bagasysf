export default function Navbar() {
  return <>
    <div
      className="flex justify-between text-secondaryColor px-[40px] py-[20px] border-b border-b-stone-700"
    >
      <div className="flex items-center gap-[20px]">
        <div>
          <img
            src="./src/assets/icons/search.png"
            className="w-[20px] h-auto"
            alt="search"
          />
        </div>
        <input
          placeholder="Search"
          type="text"
          name="search"
          className="bg-transparent w-[500px] border bg-ternaryColor rounded-lg px-[20px] py-[10px] border-stone-700"
        />
      </div>
      <div className="flex items-center gap-[20px]">
        <img
          src="./src/assets/icons/notif.png"
          alt="notif"
          className="w-[20px] h-auto"
        />
        <div className="w-[30px] h-[30px] bg-secondaryColor rounded-full"></div>
      </div>
    </div>
  </>
}