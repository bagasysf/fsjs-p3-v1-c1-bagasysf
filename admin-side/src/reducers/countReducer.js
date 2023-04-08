import { COUNT_INCREMENTED } from '../actions/actionTypes';

const initialState = {
  count: 0,
  articles: [],
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case COUNT_INCREMENTED:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
