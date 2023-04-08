import moment from 'moment';
import { useSelector } from 'react-redux';

const CardDetailArticle = () => {
  const { isLoadingGetArticle, post, error } = useSelector(
    (state) => state.article
  );

  return (
    <>
      {!isLoadingGetArticle ? (
        <div className="col-span-2 border p-[40px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[10px]">
              <img
                src="../src/assets/icons/home.png"
                alt="home"
                className="w-[12px]"
              />
              <span className="text-xs">{post.Category.name} / {post.title}</span>
            </div>
            <div>
              <span className="text-md bg-primaryColor px-[10px] py-[3px] text-white">
                {post.Category.name}
              </span>
            </div>
            <span className="text-4xl font-bold">{post.title}</span>
            <div className="flex gap-[10px] font-medium">
              {post.Tags.map((tag) => {
                return <span key={tag.id}>#{tag.name}</span>;
              })}
            </div>
            <div className="flex justify-between text-xs">
              <div className="flex items-center gap-[10px]">
                <span className="font-bold">{post.User.username}</span>
                <span>
                  {moment(post.createdAt).format('dddd, MMMM Do YYYY')}
                </span>
              </div>
            </div>
            <div>
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <span>Loading ...</span>
      )}
    </>
  );
};

export default CardDetailArticle;
