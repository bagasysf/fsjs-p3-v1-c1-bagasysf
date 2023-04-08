import {
  TAG_GETTAG_ERROR,
  TAG_GETTAG_PENDING,
  TAG_GETTAG_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isLoadingTag: true,
  tags: [],
  errorTag: '',
};

export function tagReducer(state = initialState, action) {
  switch (action.type) {
    case TAG_GETTAG_PENDING:
      return {
        ...initialState,
      };
    case TAG_GETTAG_SUCCESS:
      return {
        ...state,
        isLoadingTag: false,
        tags: action.payload,
      };
    case TAG_GETTAG_ERROR:
      return {
        ...state,
        isLoadingTag: false,
        errorTag: action.payload,
      };
    default:
      return state;
  }
}
