import {
  ARTICLE_FETCHARTICLE_ERROR,
  ARTICLE_FETCHARTICLE_PENDING,
  ARTICLE_FETCHARTICLE_SUCCESS,
  ARTICLE_GETARTICLE_ERROR,
  ARTICLE_GETARTICLE_PENDING,
  ARTICLE_GETARTICLE_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  isLoadingGetArticle: true,
  posts: [],
  post: {},
  error: '',
};

export function articleReducer(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_FETCHARTICLE_PENDING:
      return {
        ...initialState,
      };
    case ARTICLE_FETCHARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case ARTICLE_FETCHARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ARTICLE_GETARTICLE_PENDING:
      return {
        ...initialState,
      };
    case ARTICLE_GETARTICLE_SUCCESS:
      return {
        ...state,
        isLoadingGetArticle: false,
        post: action.payload,
      };
    case ARTICLE_GETARTICLE_ERROR:
      return {
        ...state,
        isLoadingGetArticle: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
