import axios from 'axios';
import {applyMiddleware, createStore} from 'redux';

import redux from 'redux';
import thunkMiddleware from 'redux-thunk';

const applyMiddleware = redux.applyMiddleware;
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action: any) => {
  console.log('action reducer', action.type + ': ' + state.counter);

  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
    default:
      return state;
  }
};

const fetchUsers = () => {
  //action creators retun and action
  //with thunk we can retun a function and it doesn't have to be pure
  return function (dispatch) {
    // dispatch(fetchUserRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        //response.data is the array of objects
        const users = response.data.map(user => user.id);
        // dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        //error.message is the error description
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
