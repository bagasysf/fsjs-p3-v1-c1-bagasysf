import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// store.subscribe(() => console.log(store.getState()));

export default store;
