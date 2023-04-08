import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    try {
      const name = e.target.name;
      const value = e.target.value;
      setLoginForm({
        ...loginForm,
        [name]: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),  
      });
      console.log(response);
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson.message);
      }
      localStorage.setItem('access_token', responseJson.access_token);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-primaryDarkColor">
        <div className="flex flex-col gap-[40px]">
          <span className="text-secondaryColor text-center text-2xl font-bold">
            Sign in to your account
          </span>
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col gap-[20px] text-white"
          >
            <input
              value={loginForm.title}
              onChange={handleLoginForm}
              placeholder="Email"
              type="text"
              name="email"
              className="bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px]"
            />
            <input
              value={loginForm.password}
              onChange={handleLoginForm}
              placeholder="Password"
              type="password"
              name="password"
              className="bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-white"
            />
            <button className="bg-stone-700 py-[10px] rounded-lg text-secondaryColor font-medium border border-none">
              Sign In
            </button>
          </form>
          <div className="flex gap-[10px] justify-center text-secondaryColor">
            <span className="font-light">Or</span>
            <span className="font-bold">Sign Up</span>
          </div>
        </div>
      </div>
    </>
  );
}
