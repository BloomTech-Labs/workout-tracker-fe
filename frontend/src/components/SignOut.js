import React, { useState } from "react";
import { login } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupStyle from "../styles/index";
import Navbar from "./Navbar";

const Login = props => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const { username, password } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await props.login(input);

    if (localStorage.getItem("token")) {
      props.history.push("/profile");
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <SignupStyle>
        <div className="form-container">
          <div>
            <h2>SignOut</h2>
          </div>
          <div>              
              <button onSubmit={handleSubmit}>SignOut</button>
          </div>
        </div>
      </SignupStyle>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userLogin: state.login.user
  };
};
export default withRouter(connect(mapStateToProps, { login })(Login));
