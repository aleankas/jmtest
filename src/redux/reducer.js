const initialState = {
  data: '',
  loading: false,
  shimmer: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_DATA') {
    return {
      ...state,
      data: action.value,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_SHIMMER') {
    return {
      ...state,
      shimmer: action.value,
    };
  }
  return state;
};

export default reducer;
