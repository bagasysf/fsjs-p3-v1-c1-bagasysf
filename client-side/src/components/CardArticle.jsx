import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CardArticle = ({ isLoading, posts }) => {
  const navigate = useNavigate();

  function spliceWord(word = '') {
    return word?.length > 60 ? word.slice(0, 60).concat(' ...') : word;
  }

  function handleDetailPage(slug) {
    // console.log(slug);
    navigate(`detail/${slug}`);
  }

  return (
    <>
      <div className="grid cursor-pointer grid-cols-3 gap-[20px]">
        {!isLoading ? (
          posts.map((post) => (
            <div
              key={post.id}
              onClick={() => handleDetailPage(post.slug)}
              className="col-span-1"
            >
              <div className="flex flex-col gap-[10px]">
                <img src={post.imgUrl} alt="img-card" />
                <div className="flex items-center justify-between pb-[10px]">
                  <div className="flex gap-[5px]">
                    <div>
                      <img
                        src="./src/assets/icons/time.png"
                        alt="time"
                        className="h-auto w-[15px]"
                      />
                    </div>
                    <span className="text-xs">
                      {moment(post.createdAt).startOf('day').fromNow()}
                    </span>
                  </div>
                  <span className="inline-flex bg-primaryColor px-[10px] py-[3px] text-right text-xs text-white">
                    {post.Category.name}
                  </span>
                </div>
                <span className="font-medium">{spliceWord(post.title)}</span>
              </div>
            </div>
          ))
        ) : (
          <span>Loading ...</span>
        )}
      </div>
    </>
  );
};

export default CardArticle;
