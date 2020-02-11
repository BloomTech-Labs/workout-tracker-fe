import React, { useState } from "react";
import ReactDOM from "react-dom";
import { signUp } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupStyle from "../styles/index";
import Navbar from "./Navbar";

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

  return (
    <>
      <Navbar />
      <SignupStyle>
        <div>
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
