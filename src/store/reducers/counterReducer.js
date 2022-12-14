const intialState = {
  count: 0,
};

const counterReducer = (state = intialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count === 0 ? 0 : state.count - 1,
    };
  }

  return state;
};

export default counterReducer;
