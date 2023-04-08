import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle, fetchCategory, getTag } from '../actions/actionCreator';
import ModalTags from '../components/ModalTags';
import AddArticlePage from './AddArticlePage';

export default function DashboardPage() {
  let [isImageOpen, setIsImageOpen] = useState(false);
  let [isAddArticleOpen, setIsAddArticleOpen] = useState(false);

  // reducer with thunk
  const { isLoadingTag, tags, errorTag } = useSelector((state) => state.tag);
  const { error, isLoading, posts } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchArticle());
    })();
  }, []);

  function closeImageModal() {
    setIsImageOpen(false);
  }
  function openImageModal() {
    setIsImageOpen(true);
  }
  function closeAddArticleModal() {
    setIsAddArticleOpen(false);
  }
  function openAddArticleModal() {
    setIsAddArticleOpen(true);
  }

  function spliceWord(word = '') {
    return word?.length > 30 ? word.slice(0, 30).concat(' ...') : word;
  }

  const handleShowTag = async (postId) => {
    try {
      dispatch(getTag(postId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (slug) => {
    console.log(slug);
    try {
      const response = await fetch(`http://localhost:3000/posts/${slug}`, {
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      console.log(response);
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson.message);
      }
      dispatch(fetchArticle());
    } catch (eror) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col p-[40px] gap-[40px] border-b border-b-stone-700">
        <div className="flex justify-between text-secondaryColor items-center">
          <span className="text-2xl font-bold">Article List</span>
          <div className="inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={openAddArticleModal}
              className="px-[30px] py-[15px] bg-ternaryColor rounded-lg"
            >
              New Article
            </button>
          </div>
          <AddArticlePage
            isAddArticleOpen={isAddArticleOpen}
            closeAddArticleModal={closeAddArticleModal}
          />
        </div>
        <table className=" text-secondaryColor overflow-x-auto">
          <thead>
            <tr className="align-top text-left">
              <th className="pr-[10px] pb-[20px]">No</th>
              <th className="pr-[10px] pb-[20px]">Title</th>
              <th className="pr-[10px] pb-[20px]">Content</th>
              <th className="pr-[10px] pb-[20px]">ImgUrl</th>
              <th className="pr-[10px] pb-[20px]">Created By</th>
              <th className="pr-[10px] pb-[20px]">Category</th>
              <th className="pr-[10px] pb-[20px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading ? (
              posts.map((post, index) => (
                <tr key={post.id} className="align-top text-sm">
                  <td className="pr-[10px] pb-[10px]">{index + 1}</td>
                  <td className="pr-[10px] pb-[10px]">
                    {spliceWord(spliceWord(post.title))}
                  </td>
                  <td className="pr-[10px] pb-[10px]">
                    {spliceWord(post.content)}
                  </td>
                  <td
                    onClick={() => {
                      handleShowTag(post.id);
                    }}
                    className="pr-[10px] pb-[10px]"
                  >
                    <div className="flex gap-[20px] items-center">
                      <div className="inset-0 flex items-center justify-center">
                        <button type="button" onClick={openImageModal}>
                          <div className="w-[30px] overflow-hidden h-[30px] rounded-full gap-[10px]">
                            <img
                              className="h-full object-cover"
                              src={post.imgUrl}
                              alt=""
                            />
                          </div>
                        </button>
                      </div>
                      <ModalTags
                        isImageOpen={isImageOpen}
                        closeImageModal={closeImageModal}
                        isLoadingTag={isLoadingTag}
                        tags={tags}
                        errorTag={errorTag}
                      />
                      <span>{spliceWord(post.imgurl)}</span>
                    </div>
                  </td>
                  <td className="pr-[10px] pb-[10px]">{post.User.username}</td>
                  <td className="pr-[10px] pb-[10px]">{post.Category.name}</td>
                  <td>
                    <div className="flex justify-center items-center gap-[20px] cursor-pointer">
                      <div>
                        <img
                          src="./src/assets/icons/edit.png"
                          alt="edit"
                          className="w-[15px] h-auto"
                        />
                      </div>
                      <div
                        onClick={() => {
                          handleDeletePost(post.slug);
                        }}
                        className="cursor-pointer "
                      >
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
                <td>Loading ..</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
