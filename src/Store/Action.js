import axios from "axios";

//To Fetch data from API
export const get_CW_Data = () => (dispatch) => {
  axios
    .get("https://codifyinditest.com/script_test/api-test/")
    .then((res) => {
      dispatch({ type: "GET_CW_DATA", payload: res.data["script test"] });
    })
    .catch((err) => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    });
};
