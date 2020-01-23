import React, { useState } from "react";
import { login } from "../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SignupStyle from "../styles/index";
import ProfileNavBar from "../components/Profile/ProfileNavBar";

const Login = props => {
  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const { username, password } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  function handleLogout() {
    props.history.push("/login");
  }

  return (
    <>
      {/* <Navbar /> */}
      <ProfileNavBar />
      <SignupStyle>
        <div className="form-container">
          <div>              
              <button onSubmit={handleLogout}>Logout</button>
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
