import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
// import "./RecordRoutines.css";
import axios from "axios";

const RoutineRecords = props => {
  const [input, setInput] = useState({
    member_id: "",
    routine_id: ""
  });

  const { member_id, routine_id } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`https://firstrep.herokuapp.com/api/memberRoutineRecords/`, input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <>
      {/* <Navbar /> */}

      <div className="form-container">
        <div>
          <h2>Add A Routine</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={member_id}
                required
                onChange={handleChange("member_id")}
                placeholder="member_id"
              />
              <input
                value={routine_id}
                required
                onChange={handleChange("routine_id")}
                placeholder="routine-id"
              />
            </div>
            <button>Routine Records</button>
          </form>
        </div>
      </div>
    </>
  );
};
// not being used atm
const mapStateToProps = state => {
  return {
    routine: state.addRoutine
  };
};

export default connect(mapStateToProps)(RoutineRecords);
