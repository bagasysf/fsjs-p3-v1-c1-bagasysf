import {
  ARTICLE_FETCHARTICLE_ERROR,
  ARTICLE_FETCHARTICLE_PENDING,
  ARTICLE_FETCHARTICLE_SUCCESS,
  ARTICLE_POSTARTICLE_ERROR,
  ARTICLE_POSTARTICLE_PENDING,
  ARTICLE_POSTARTICLE_SUCCESS,
  CATEGORY_FETCHCATEGORY_ERROR,
  CATEGORY_FETCHCATEGORY_PENDING,
  CATEGORY_FETCHCATEGORY_SUCCESS,
  CATEGORY_POSTCATEGORY_ERROR,
  CATEGORY_POSTCATEGORY_PENDING,
  CATEGORY_POSTCATEGORY_SUCCESS,
  COUNT_INCREMENTED,
  TAG_GETTAG_ERROR,
  TAG_GETTAG_PENDING,
  TAG_GETTAG_SUCCESS,
} from './actionTypes';

export function countIncremented() {
  return { type: COUNT_INCREMENTED };
}

// Action creator for Article
const fetchArticlePending = () => ({
  type: ARTICLE_FETCHARTICLE_PENDING,
});
const fetchArticleSuccess = (posts) => ({
  type: ARTICLE_FETCHARTICLE_SUCCESS,
  payload: posts,
});

const fetchArticleError = (errorMsg) => ({
  type: ARTICLE_FETCHARTICLE_ERROR,
  payload: errorMsg,
});

export const fetchArticle = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchArticlePending());
      const response = await fetch('http://localhost:3000/posts', {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      const responseJson = await response.json();
      dispatch(fetchArticleSuccess(responseJson.posts));
    } catch (error) {
      dispatch(fetchArticleError(error));
    }
  };
};

// Action creator for Category
const fetchCategoryPending = () => ({
  type: CATEGORY_FETCHCATEGORY_PENDING,
});
const fetchCategorySuccess = (categories) => ({
  type: CATEGORY_FETCHCATEGORY_SUCCESS,
  payload: categories,
});
const fetchCategoryError = (errorMsg) => ({
  type: CATEGORY_FETCHCATEGORY_ERROR,
  payload: errorMsg,
});

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchCategoryPending());
      const response = await fetch('http://localhost:3000/categories', {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      const responseJson = await response.json();
      dispatch(fetchCategorySuccess(responseJson.categories));
    } catch (error) {
      dispatch(fetchCategoryError(error));
    }
  };
};

// Action Creator for Post Article
const postArticlePending = () => ({
  type: ARTICLE_POSTARTICLE_PENDING,
});
const postArticleSuccess = (posts) => ({
  type: ARTICLE_POSTARTICLE_SUCCESS,
  payload: posts,
});
const postArticleError = (errorMsg) => ({
  type: ARTICLE_POSTARTICLE_ERROR,
  payload: errorMsg,
});
export const postArticle = (articleForm) => {
  return async (dispatch, getState) => {
    try {
      dispatch(postArticlePending);
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(articleForm),
      });
      const responseJson = await response.json();
      dispatch(postArticleSuccess(responseJson));
    } catch (error) {
      dispatch(postArticleError(error));
    }
  };
};

// Action Creator for get Tags
const getTagPending = () => ({
  type: TAG_GETTAG_PENDING,
});
const getTagSuccess = (tags) => ({
  type: TAG_GETTAG_SUCCESS,
  payload: tags,
});
const getTagError = (errorMsg) => ({
  type: TAG_GETTAG_ERROR,
  payload: errorMsg,
});
export const getTag = (postId) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getTagPending());
      const response = await fetch(`http://localhost:3000/tags/${postId}`, {
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
      const responseJson = await response.json();
      dispatch(getTagSuccess(responseJson.tag));
    } catch (error) {
      dispatch(getTagError(error));
    }
  };
};

// Action Creator for post Category
const postCategoryPending = () => ({
  type: CATEGORY_POSTCATEGORY_PENDING,
});
const postCategorySuccess = (category) => ({
  type: CATEGORY_POSTCATEGORY_SUCCESS,
  payload: category,
});
const postCategoryError = (errorMsg) => ({
  type: CATEGORY_POSTCATEGORY_ERROR,
  payload: errorMsg,
});

export const postCategory = (categoryForm) => {
  return async (dispatch, getState) => {
    console.log(categoryForm);
    try {
      dispatch(postCategoryPending());
      const response = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(categoryForm),
      });
      const responseJson = response.json();
      console.log(responseJson);
      dispatch(postCategorySuccess(responseJson));
    } catch (error) {
      postCategoryError();
      dispatch();
    }
  };
};
