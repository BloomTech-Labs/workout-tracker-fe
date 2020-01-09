import styled from "styled-components";

const AboutUsStyleSection = styled.div`


.container {
    display: flex;
  }
  .container .member-section {
    width: 50%;
    height: 400px;
    display: flex;
    padding-top: 100px;
    padding-right: 30px;
  }
  .container .member-section .member-image img {
    border-radius: 50%;
    width: 80%;
    height: auto;
    overflow: hidden;
  }
  .container .member-section .member-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 160px;
  }
  .container .member-section .member-name h1 {
    font-size: 1.4rem;
    font-weight: 1000;
  } 
  .container .member-section .member-name h2 {
    padding-bottom: 30px;
    padding-top: 5px;
    font-size: 0.8rem;
    font-weight: 20;
  } 
  .container .member-section p {
    width: 60%;
    padding-top: 100px;
    font-size: 0.8rem;
  }
  .cBtAXH {
    height: 16%
  }
`;

export default AboutUsStyleSection;
