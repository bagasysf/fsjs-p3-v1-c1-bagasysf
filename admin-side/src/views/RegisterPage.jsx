import { useState } from 'react';

const intialState = {
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  address: '',
};
const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState(intialState);

  const handleRegisterForm = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(registerForm),
      });
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson.message);
      }
      setRegisterForm(intialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="inline-flex flex-col p-[40px] gap-[40px]">
        <div className="flex flex-col gap-[40px] bg-primaryDarkColor border p-[40px] rounded-xl border-stone-700">
          <div className="flex justify-between text-secondaryColor items-center">
            <span className="text-2xl font-bold">Register New Admin</span>
          </div>
          <form onSubmit={handleSubmitRegister}>
            <div className="flex flex-col gap-[20px] text-secondaryColor">
              <input
                className="bg-transparent px-[20px] py-[10px] border-stone-700 rounded-lg"
                type="text"
                name="username"
                value={registerForm.username}
                onChange={handleRegisterForm}
                placeholder="Username"
              />
              <input
                className="bg-transparent px-[20px] py-[10px] border-stone-700 rounded-lg"
                type="text"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterForm}
                placeholder="Email"
              />
              <input
                className="bg-transparent px-[20px] py-[10px] border-stone-700 rounded-lg"
                type="text"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterForm}
                placeholder="Password"
              />
              <input
                className="bg-transparent px-[20px] py-[10px] border-stone-700 rounded-lg"
                type="text"
                name="phoneNumber"
                value={registerForm.phoneNumber}
                onChange={handleRegisterForm}
                placeholder="Phone Number"
              />
              <input
                className="bg-transparent px-[20px] py-[10px] border-stone-700 rounded-lg"
                type="text"
                name="address"
                value={registerForm.address}
                onChange={handleRegisterForm}
                placeholder="Address"
              />
            </div>
            <div className="flex justify-between gap-[20px] pt-[40px]">
              <div className="flex gap-[20px]">
                <button
                  type="button"
                  onClick={() => closeAddCategoryModal()}
                  className="bg-ternaryColor py-[9px] px-[40px] rounded-lg text-gray-400 bg-primaryColor border border-ternaryColor"
                >
                  Cancel
                </button>
                <button className="py-[9px] px-[40px] rounded-lg text-primaryColor bg-secondaryColor">
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
