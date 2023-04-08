import Carousel from '../components/Carousel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle } from '../actions/actionCreator';
import CardArticle from '../components/CardArticle';

const HomePage = () => {
  const { isLoading, posts, error } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchArticle());
    })();
  }, []);

  return (
    <>
      <div className="col-span-3">
        <Carousel />
      </div>
      <div className="col-span-2 border p-[40px]">
        <div className="flex flex-col gap-[20px]">
          <span className="text-2xl font-bold">All Category</span>
          <CardArticle isLoading={isLoading} posts={posts} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
