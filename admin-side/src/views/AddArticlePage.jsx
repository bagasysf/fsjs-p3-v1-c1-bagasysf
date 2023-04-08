import { Listbox } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchArticle,
  fetchCategory,
  postArticle,
} from '../actions/actionCreator';

export default function AddArticlePage({
  isAddArticleOpen,
  closeAddArticleModal,
}) {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [articleForm, setArticleForm] = useState({
    title: '',
    content: '',
    imgUrl: '',
    CategoryId: '',
    nameTag: [],
  });
  const [tagValues, setTagValues] = useState([]);
  const dispatch = useDispatch();
  const { isLoading, categories, error } = useSelector(
    (state) => state.category
  );

  const handleTagValuesChange = (e, i) => {
    const newValue = e.target.value;
    setTagValues((prevValue) => {
      const newValues = [...prevValue];
      newValues[i] = newValue;
      return newValues;
    });
  };
  const handleArticleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setArticleForm({
      ...articleForm,
      [name]: value,
    });
  };
  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      dispatch(postArticle(articleForm));
      dispatch(fetchArticle());
      closeAddArticleModal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await dispatch(fetchCategory());
      if (categories.length > 0) {
        setArticleForm({
          ...articleForm,
          CategoryId: selectedCategory.id,
        });
      }
    })();
  }, [selectedCategory]);

  useEffect(() => {
    (async () => {
      if (tagValues.length > 0) {
        setArticleForm({
          ...articleForm,
          nameTag: tagValues,
        });
      }
    })();
  }, [tagValues]);

  return (
    <>
      <Transition appear show={isAddArticleOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeAddArticleModal}
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
                    onSubmit={handleCreatePost}
                    className="flex gap-[20px] flex-col rounded-lg"
                  >
                    <div className="flex gap-[20px] justify-between text-secondaryColor">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold pb-[40px]"
                      >
                        Add Article
                      </Dialog.Title>
                    </div>
                    <input
                      value={articleForm.title}
                      onChange={handleArticleForm}
                      placeholder="Title"
                      type="text"
                      name="title"
                      className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                    />
                    <textarea
                      value={articleForm.content}
                      onChange={handleArticleForm}
                      placeholder="Content"
                      name="content"
                      cols="30"
                      rows="7"
                      className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                    ></textarea>
                    <Listbox onChange={setSelectedCategory}>
                      <Listbox.Button className="text-start px-[20px] text-gray-400  border rounded-lg py-[10px] border-stone-700">
                        {selectedCategory.hasOwnProperty('name')
                          ? selectedCategory.name
                          : 'All'}
                      </Listbox.Button>
                      <Listbox.Options className="text-secondaryColor border border-stone-700 rounded-lg overflow-hidden">
                        {!isLoading &&
                          categories.map((category) => (
                            <Listbox.Option
                              name="CategoriId"
                              key={category.id}
                              value={category}
                              disabled={category.unavailable}
                              className="px-[20px] py-[10px] cursor-pointer hover:bg-stone-700"
                            >
                              {category.name}
                            </Listbox.Option>
                          ))}
                      </Listbox.Options>
                    </Listbox>
                    <input
                      placeholder="Image Url"
                      type="text"
                      name="imgUrl"
                      value={articleForm.imgUrl}
                      onChange={handleArticleForm}
                      className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                    />
                    <input
                      placeholder="Tag"
                      type="text"
                      onChange={(e) => handleTagValuesChange(e, 0)}
                      className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                    />
                    <div className="flex justify-between gap-[20px]">
                      <input
                        placeholder="Additional Tag"
                        type="text"
                        onChange={(e) => handleTagValuesChange(e, 1)}
                        className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                      />
                      <button
                        type="button"
                        className="px-[40px] py-[9px] text-secondaryColor rounded-lg bg-stone-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between gap-[20px]">
                      <input
                        placeholder="Additional Tag"
                        type="text"
                        onChange={(e) => handleTagValuesChange(e, 2)}
                        className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                      />
                      <button
                        type="button"
                        className="px-[40px] py-[9px] text-secondaryColor rounded-lg bg-stone-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between gap-[20px]">
                      <input
                        placeholder="Additional Tag"
                        type="text"
                        onChange={(e) => handleTagValuesChange(e, 3)}
                        className="w-full bg-transparent rounded-lg border border-stone-700 px-[20px] py-[10px] text-secondaryColor"
                      />
                      <button
                        type="button"
                        className="px-[40px] py-[9px] text-secondaryColor rounded-lg bg-stone-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-between gap-[20px] pt-[40px]">
                      <div>
                        <button
                          type="button"
                          value={[tagValues]}
                          name="nameTag"
                          onClick={handleArticleForm}
                          className="py-[9px] px-[40px] rounded-lg text-secondaryColor bg-stone-700"
                        >
                          Add Image
                        </button>
                      </div>
                      <div className="flex gap-[20px]">
                        <button
                          type="button"
                          onClick={() => closeAddArticleModal()}
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
