import {combineReducers} from 'redux';
import cart from './reducers/cartReduce';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    cart,
  }),
  applyMiddleware(thunk),
);

export default store;
