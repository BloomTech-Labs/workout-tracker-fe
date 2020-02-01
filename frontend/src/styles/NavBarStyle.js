import styled from "styled-components";

const NavBarStyle = styled.div`
  height: 13%;
  background-color: rgb(76, 92, 150);
  background-color: rgb(46, 49, 65);
  background-image: linear-gradient(to top, #2c2c54, rgb(76, 92, 150));
  background-size: auto, cover;
  // background-image: url("https://46gb9l10qld536ktv928ai60-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/kid-airport.jpg
  // ");
  //   background-size: cover;
  position: fixed;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 20px;
  align-items: center;
  align-content: center;
  justify-content: center;
  display: flex;
  .form_container {
    background-size: cover;
    height: 100vh;
    justify-content: center;
  }
  form {
    display: flex;
    max-width: 60%;
    width: 500px;
    margin: 0 auto;

    background: rgb(46, 49, 65);
    opacity: 1;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }
  h2 {
    margin-left: 200px;
  }
  body {
  }

  input {
    display: flex;
    flex-direction: column;
    margin-right: 4%;
    margin: 10px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #c5ecfd;
    padding: 10px;
    color: #c5ecfd;
    width: 100%;
  }

  button {
    background: rgb(76, 92, 150);
    text-align: center;
    margin-top: 10px;
    margin-left: 25px;
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

`;

export default NavBarStyle;
