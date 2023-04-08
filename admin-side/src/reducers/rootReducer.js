import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { categoryReducer } from './categoryReducer';
import { countReducer } from './countReducer';
import { tagReducer } from './tagReducer';

const rootReducer = combineReducers({
  article: articleReducer,
  count: countReducer,
  category: categoryReducer,
  tag: tagReducer,
});

export default rootReducer;
