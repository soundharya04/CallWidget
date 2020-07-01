import React from "react";
import { get_CW_Data } from "../Store/Action";
import { connect } from "react-redux";

const CallWidget = (props) => {
  React.useEffect(() => {
    props.get_CW_Data();
  }, []);

  const call_widget = props.cw_data ? (
    <div className="call_widget">
      <div className="cw_disp">
        <h3>{props.cw_data ? props.cw_data.labels : null}</h3>
        <span>
          <i className="ion-ios-telephone" />
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

const mapStateToProps = (state) => {
  return {
    cw_data: state ? state.cw_data : null,
  };
};

export default connect(mapStateToProps, { get_CW_Data })(CallWidget);
