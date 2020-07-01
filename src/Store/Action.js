import axios from "axios";

export const get_CW_Data = () => (dispatch) => {
  axios
    .get("https://codifyinditest.com/script_test/api-test/")
    .then((res) => {
      console.log(res.data["script test"]);
      dispatch({ type: "GET_CW_DATA", payload: res.data["script test"] });
    })
    .catch((err) => {
      console.log(err);
    });
};
