import {createStore, combineReducers} from 'redux';
import pageReducer from '../reducers/pageReducer';

import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../reducers/counterReducer';
const rootReducer = combineReducers({
  pageList: pageReducer,
  counter: counterReducer,
});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
