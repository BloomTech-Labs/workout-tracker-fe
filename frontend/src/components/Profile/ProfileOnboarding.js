import React, { useState } from "react";
import { postStatus } from "../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Onboard = props => {
  const [input, setInput] = useState({
    weight: '',
    height: ''
  });

  const { weight, height } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await props.postStatus(input);

    if (localStorage.getItem("token")) {
      props.history.push("/profile/onboarding");
    }
  };
  return (
    <>
      {/* <Navbar /> */}
        <div className="status-forum">
          <div>
            <h2>Status Inputs</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  value={weight}
                  required
                  onChange={handleChange("weight")}
                  placeholder="weight"
                />
                <input
                  value={height}
                  required
                  onChange={handleChange("height")}
                  placeholder="height"
                  type="height"
                />
                
              </div>
              <button>Submit User Stats</button>
            </form>
          </div>
        </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    Onboard: state.Onboard.user
  };
};
export default withRouter(connect(mapStateToProps, { postStatus })(Onboard));
