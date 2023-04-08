import {
  CATEGORY_FETCHCATEGORY_ERROR,
  CATEGORY_FETCHCATEGORY_PENDING,
  CATEGORY_FETCHCATEGORY_SUCCESS,
  CATEGORY_POSTCATEGORY_ERROR,
  CATEGORY_POSTCATEGORY_PENDING,
  CATEGORY_POSTCATEGORY_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isLoading: true,
  categories: [],
  error: '',
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCHCATEGORY_PENDING:
      return {
        ...initialState,
      };
    case CATEGORY_FETCHCATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case CATEGORY_FETCHCATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CATEGORY_POSTCATEGORY_PENDING:
      return {
        ...state,
      };
    case CATEGORY_POSTCATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case CATEGORY_POSTCATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
