const initState = {
  cw_data: null,
};

const Rootreducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CW_DATA":
      return {
        cw_data: action.payload,
      };

    default:
      return state;
  }
};

export default Rootreducer;
