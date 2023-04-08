import {
  CATEGORY_FETCHCATEGORY_ERROR,
  CATEGORY_FETCHCATEGORY_PENDING,
  CATEGORY_FETCHCATEGORY_SUCCESS,
} from '../actions/actionType';

const initialState = {
  isLoading: true,
  categories: [],
  error: '',
};

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCHCATEGORY_PENDING:
      return {
        ...state,
        isLoading: true,
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
    default:
      return state;
  }
}
