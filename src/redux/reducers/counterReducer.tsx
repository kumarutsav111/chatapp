const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action: any) => {
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

export default counterReducer;
