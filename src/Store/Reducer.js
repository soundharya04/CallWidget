const initState = {
  cw_data: null,
  errors: null,
};

//initialized root reducer
const Rootreducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CW_DATA":
      //setting only data to clear previous errors
      return {
        cw_data: action.payload,
        errors: null,
      };

    case "GET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default Rootreducer;
