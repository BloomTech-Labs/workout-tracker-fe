import React, { useState, useRoutes, useRedirect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./addroutine.css";
import "../../styles/index";
import ProfileNavbar from "../Profile/ProfileNavBar";
import "./routineStyle.css";

const AddRoutine = props => {
  const [input, setInput] = useState({
    routine_name: "",
    routine_description: ""
  });

  const [id, setId] = useState(0);

  const { routine_name, routine_description } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`https://firstrep.herokuapp.com/api/routines`, input)
      .then(res => props.history.push(`/add-exercise/${res.data.id}`))

      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <ProfileNavbar />
        <div className="routine-header">
          <h2>Create A New Routine Name</h2>
        </div>
        <div className="form-container">
          <form className="add-routine-form" onSubmit={handleSubmit}>
            <div>
              <input
                value={routine_name}
                required
                onChange={handleChange("routine_name")}
                placeholder="routine-name"
              />
              <input
                value={routine_description}
                required
                onChange={handleChange("routine_description")}
                placeholder="routine-description"
                type="text"
              />
            </div>
            <button className="addRoutines">Create Routine</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRoutine;
