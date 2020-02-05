import React, { useState } from "react";
import ReactDOM from "react-dom";
import { signUp } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupStyle from "../styles/index";
import Navbar from "./Navbar";
import { Redirect } from "react-router";
// import Navbar from "./Navbar";
// import validateAuth from "../validateAuth";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useCallback } from "react";
// import { combineReducer } from "../reducers";

const Signup = props => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  });

  const { first_name, last_name, email, username, password } = input;

  const handleChange = props => e => {
    setInput({ ...input, [props]: e.target.value });
  };

  const registerHandler = async e => {
    e.preventDefault();
    await props.signUp(input);

    props.history.push("/login");
  };

  //   const dispatch = useDispatch();
  //   const incrementCounter = useCallback(
  //     () => dispatch({ type: "LOGIN_SUCCESS" }),
  //     [dispatch]
  //   );

  //   const dispatcher = (first_name, last_name, Email) => {
  //     dispatch(() => signUp({ first_name, last_name, Email }));
  //   };
  //   <form onSubmit={() => dispatch(signUp(first_name, last_name, Email))}>

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <SignupStyle>
        <div className="form-container">
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <form onSubmit={registerHandler}>
              <div>
                <input
                  value={first_name}
                  required
                  onChange={handleChange("first_name")}
                  placeholder="first-name"
                />
                <input
                  value={last_name}
                  required
                  onChange={handleChange("last_name")}
                  placeholder="last-name"
                />
                <input
                  value={email}
                  required
                  onChange={handleChange("email")}
                  placeholder="Email"
                />
                <input
                  value={username}
                  required
                  onChange={handleChange("username")}
                  placeholder="username"
                />
                <input
                  value={password}
                  required
                  onChange={handleChange("password")}
                  placeholder="password"
                  type="password"
                />
              </div>
              <button>Signup</button>
            </form>
            
          </div>
        </div>
      </SignupStyle>
    </>
  );
};

Signup.propTypes = {};

const mapStateToProps = state => {
  return {
    newUser: state.signUp.message
  };
};

export default withRouter(connect(mapStateToProps, { signUp })(Signup));
