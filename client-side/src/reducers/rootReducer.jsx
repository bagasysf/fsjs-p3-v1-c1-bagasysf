import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { categoryReducer } from './categoryReducer';
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
  article: articleReducer,
  count: counterReducer,
  category: categoryReducer,
});

export default rootReducer;
