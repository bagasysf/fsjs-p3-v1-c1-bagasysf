import {
  ARTICLE_FETCHARTICLE_ERROR,
  ARTICLE_FETCHARTICLE_PENDING,
  ARTICLE_FETCHARTICLE_SUCCESS,
  ARTICLE_GETARTICLE_ERROR,
  ARTICLE_GETARTICLE_PENDING,
  ARTICLE_GETARTICLE_SUCCESS,
  CATEGORY_FETCHCATEGORY_ERROR,
  CATEGORY_FETCHCATEGORY_PENDING,
  CATEGORY_FETCHCATEGORY_SUCCESS,
} from './actionType';

// Action Creator for Fetch Article
export const fetchArticlePending = () => {
  return {
    type: ARTICLE_FETCHARTICLE_PENDING,
  };
};
export const fetchArticleSuccess = (articles) => {
  return {
    type: ARTICLE_FETCHARTICLE_SUCCESS,
    payload: articles,
  };
};
export const fetchArticleError = (errorMsg) => {
  return {
    type: ARTICLE_FETCHARTICLE_ERROR,
    payload: errorMsg,
  };
};
export const fetchArticle = () => {
  return async (dispatch, getState) => {
    dispatch(fetchArticlePending);
    // console.log('Before Fetching (pending)', getState());
    const response = await fetch('http://localhost:3000/pub/posts');

    if (!response.ok) {
      const responseJson = await response.json();
      dispatch(fetchArticleError(responseJson));
      // console.log('After Fetching (error)', getState());
    }

    const responseJson = await response.json();
    dispatch(fetchArticleSuccess(responseJson.posts));
    // console.log('After Fetching (success)', getState());
  };
};

// Action Creator for get Article by Id
export const getArticlePending = () => {
  return {
    type: ARTICLE_GETARTICLE_PENDING,
  };
};
export const getArticleSuccess = (slug) => {
  return {
    type: ARTICLE_GETARTICLE_SUCCESS,
    payload: slug,
  };
};
export const getArticleError = (errorMsg) => {
  return {
    type: ARTICLE_GETARTICLE_ERROR,
    payload: errorMsg,
  };
};
export const getArticle = (slug) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getArticlePending);
      const response = await fetch(`http://localhost:3000/pub/posts/${slug}`);

      if (!response.ok) {
        const responseJson = await response.json();
        dispatch(getArticleError(responseJson));
      }

      const responseJson = await response.json();
      // console.log(responseJson);
      dispatch(getArticleSuccess(responseJson.post));
    } catch (error) {
      console.log(error);
    }
  };
};

// Action Creator for Fetch Category
export const fetchCategoryPending = () => {
  return {
    type: CATEGORY_FETCHCATEGORY_PENDING,
  };
};
export const fetchCategorySuccess = (categories) => {
  return {
    type: CATEGORY_FETCHCATEGORY_SUCCESS,
    payload: categories,
  };
};
export const fetchCategoryError = (errorMsg) => {
  return {
    type: CATEGORY_FETCHCATEGORY_ERROR,
    payload: errorMsg,
  };
};
export const fetchCategory = () => {
  return async (dispatch, getState) => {
    dispatch(fetchCategoryPending);
    console.log('Before Fetching Category (pending)', getState());
    const response = await fetch(`http://localhost:3000/pub/categories`);

    if (!response.ok) {
      const responseJson = await response.json();
      dispatch(fetchCategoryError(responseJson));
      console.log('After Fetching Category (error)', getState());
    }

    const responseJson = await response.json();
    dispatch(fetchCategorySuccess(responseJson.categories));
    console.log('After Fetching Category (success)', getState());
  };
};
