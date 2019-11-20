import React, { useState } from "react";
import { login } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupStyle from "../styles/index";

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
    <SignupStyle>
      <div className="form-container">
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
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
              />
            </div>
            <button>Signin</button>
          </form>
        </div>
      </div>
    </SignupStyle>
  );
};

const mapStateToProps = state => {
  return {
    userLogin: state.login.user
  };
};
export default withRouter(connect(mapStateToProps, { login })(Login));
