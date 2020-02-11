import React, { useState } from "react";
import { updateStatus } from "../../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const UpdateUser = props => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  const { first_name, last_name, email } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const registerHandler = async event => {
    event.preventDefault();
    await props.updateUser(input);
    props.history.push("/profile");
  };
  // if(testForStats()) {
  return (
    <>
      <div className="status-forum">
        <div>
          <h2>Update Profile</h2>
        </div>
        <div>
          <form onSubmit={registerHandler}>
            <div>
              <input
                value={first_name}
                required
                onChange={handleChange("first_name")}
                placeholder="First Name"
              />

              <input
                value={last_name}
                required
                onChange={handleChange("last_name")}
                placeholder="Last Name"
              />

              <input
                value={email}
                required
                onChange={handleChange("email")}
                placeholder="email"
              />
            </div>
            <button>Update User Stats</button>
          </form>
        </div>
      </div>
    </>
  );
};

UpdateUser.propTypes = {};

const mapStateToProps = state => {
  return {
    member_id: state.member_id,
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time
  };
};

export default withRouter(
  connect(mapStateToProps, { updateStatus })(UpdateUser)
);
