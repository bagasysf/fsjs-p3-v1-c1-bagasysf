import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await localStorage.removeItem('access_token');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-span-2 border-r border-stone-700">
      <div className="flex justify-center py-[40px] border-b border-stone-700">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zjhz02POng7IznmuVTo1xRg4KATA8YTSOZFWG2TYgQ&s"
            alt="logo-rumaysho"
          />
        </div>
      </div>
      <ul className="flex flex-col px-[40px] py-[40px] gap-[20px] text-secondaryColor">
        <li className="flex gap-[20px] items-center">
          <div>
            <img
              src="./src/assets/icons/dashboard.png"
              alt="dashboard"
              className="h-auto w-[20px]"
            />
          </div>
          <NavLink
            to=""
            style={({ isActive }) => {
              isActive ? 'font-bold text-stone-700' : undefined;
            }}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="flex gap-[20px] items-center">
          <div>
            <img
              src="./src/assets/icons/category.png"
              alt="category"
              className="h-auto w-[20px]"
            />
          </div>
          <NavLink
            to="categories"
            style={({ isActive }) => {
              isActive ? 'font-bold text-stone-700' : undefined;
            }}
          >
            Category
          </NavLink>
        </li>
        <NavLink
          to="register"
          style={({ isActive }) => {
            isActive ? 'font-bold text-stone-700' : undefined;
          }}
          className="flex gap-[20px] items-center"
        >
          <div>
            <img
              src="./src/assets/icons/add-user.png"
              alt="register"
              className="h-auto w-[20px]"
            />
          </div>
          <span>Register</span>
        </NavLink>
        <li
          onClick={handleLogout}
          className="flex gap-[20px] items-center cursor-pointer"
        >
          <div>
            <img
              src="./src/assets/icons/logout.png"
              alt="sign-out"
              className="h-auto w-[20px]"
            />
          </div>
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
  );
}
