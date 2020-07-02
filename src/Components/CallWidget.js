import React from "react";
import { get_CW_Data } from "../Store/Action";
import { connect } from "react-redux";
import callicon from "../resources/phone.png";

//Widget Component
const CallWidget = (props) => {
  //Hook to fetch data from api and save it in store
  React.useEffect(() => {
    props.get_CW_Data();
  }, []);

  //To check if data is available in api
  const call_widget = props.cw_data ? (
    <div className="call_widget">
      <div className="cw_disp">
        <h3>{props.cw_data ? props.cw_data.labels : null}</h3>
        <span className="callbtn">
          <img src={callicon} alt="callicon" />
          <span>{props.cw_data ? props.cw_data.phone_number : null}</span>
        </span>
      </div>
      <div className="cw_ctrl">
        <button className="cwclose">X</button>
      </div>
    </div>
  ) : null;
  return call_widget;
};

//To get data from store and pass to props
const mapStateToProps = (state) => {
  return {
    cw_data: state ? state.cw_data : null,
  };
};

export default connect(mapStateToProps, { get_CW_Data })(CallWidget);
