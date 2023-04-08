import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../actions/actionCreator';
import AddCategoryPage from './AddCategoryPage';

export default function Category() {
  const { isLoading, categories, error } = useSelector(
    (state) => state.category
  );
  let [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const dispatch = useDispatch();

  function closeAddCategoryModal() {
    setIsAddCategoryOpen(false);
  }
  function openAddCategoryModal() {
    setIsAddCategoryOpen(true);
  }

  const handleDeleteCategory = async (categoryId) => {
    console.log(categoryId);
    try {
      const response = await fetch(
        `http://localhost:3000/categories/${categoryId}`,
        {
          method: 'DELETE',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        }
      );
      const responseJson = response.json();
      if (!response.ok) {
        throw new Error(responseJson.message);
      }
      dispatch(fetchCategory());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      // isi dulu action creatornya
      await dispatch(fetchCategory());
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col p-[40px] gap-[40px]">
        <div className="flex justify-between text-secondaryColor items-center">
          <span className="text-2xl font-bold">Article List</span>
          <div className="inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={openAddCategoryModal}
              className="px-[30px] py-[15px] bg-ternaryColor rounded-lg"
            >
              New Article
            </button>
          </div>
          <AddCategoryPage
            isAddCategoryOpen={isAddCategoryOpen}
            closeAddCategoryModal={closeAddCategoryModal}
          />
        </div>
        <table className="table-auto text-secondaryColor">
          <thead>
            <tr className="align-top text-left">
              <th className="pr-[10px] pb-[20px]">No</th>
              <th className="pr-[10px] pb-[20px]">Title</th>
              <th className="pr-[10px] pb-[20px]">Created</th>
              <th className="pr-[10px] pb-[20px]">Updated</th>
              <th className="pr-[10px] pb-[20px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              categories.map((category, i) => (
                <tr
                  key={category.id}
                  className="text-sm space-x-[20px] align-top"
                >
                  <td className="pr-[10px] pb-[20px]">{i + 1}</td>
                  <td className="pr-[10px] pb-[20px]">{category.name}</td>

                  <td className="pr-[10px] pb-[20px]">{category.createdAt}</td>
                  <td className="pr-[10px] pb-[20px]">{category.updatedAt}</td>
                  <td>
                    <div
                      onClick={() => {
                        handleDeleteCategory(category.id);
                      }}
                      className="flex justify-start items-center gap-[20px]"
                    >
                      <div>
                        <img
                          src="./src/assets/icons/delete.png"
                          alt="delete"
                          className="w-[15px] h-auto"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Loading ...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
