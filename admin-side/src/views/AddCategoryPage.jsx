import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { fetchCategory, postCategory } from '../actions/actionCreator';

export default function AddCategoryPage({
  isAddCategoryOpen,
  closeAddCategoryModal,
}) {
  const [categoryForm, setCategoryForm] = useState({
    name: '',
  });
  const dispatch = useDispatch();

  const handleCategoryForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategoryForm({
      ...categoryForm,
      [name]: value,
    });
  };
  const handleCategoryPost = async (e) => {
    e.preventDefault();
    try {
      dispatch(postCategory(categoryForm));
      dispatch(fetchCategory());
      closeAddCategoryModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Transition appear show={isAddCategoryOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeAddCategoryModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ternaryColor/60 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform  rounded-2xl bg-primaryDarkColor border border-stone-700 p-[40px] text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={handleCategoryPost}
                    className="flex gap-[20px] flex-col rounded-lg"
                  >
                    <div className="flex gap-[20px] justify-between text-secondaryColor">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold pb-[40px]"
                      >
                        Add Category
                      </Dialog.Title>
                    </div>
                    <input
                      value={categoryForm.title}
                      onChange={handleCategoryForm}
                      placeholder="Title"
                      type="text"
                      name="name"
                      className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                    />
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
                          Add Article
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
