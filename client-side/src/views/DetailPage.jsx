import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArticle } from '../actions/actionCreator';
import { useEffect } from 'react';
import CardDetailArticle from '../components/CardDetailArticle';

const DetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getArticle(slug));
    })();
  }, []);

  return (
    <>
      <CardDetailArticle slug={slug} />
    </>
  );
};

export default DetailPage;
