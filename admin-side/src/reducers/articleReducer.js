import {
  ARTICLE_FETCHARTICLE_ERROR,
  ARTICLE_FETCHARTICLE_PENDING,
  ARTICLE_FETCHARTICLE_SUCCESS,
  ARTICLE_POSTARTICLE_ERROR,
  ARTICLE_POSTARTICLE_PENDING,
  ARTICLE_POSTARTICLE_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  posts: [],
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
        // error: '',
      };
    case ARTICLE_FETCHARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ARTICLE_POSTARTICLE_PENDING:
      return {
        ...state,
      };
    case ARTICLE_POSTARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ARTICLE_POSTARTICLE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
