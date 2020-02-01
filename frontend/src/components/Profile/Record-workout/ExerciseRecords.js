import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
// import "./RecordRoutines.css";
import axios from "axios";

const ExerciseRecords = props => {
  const [input, setInput] = useState({
    routine_record_id: "",
    exercise_id: "",
    sets: "",
    reps: "",
    notes: ""
  });

  const { exercise_id, routine_record_id, sets, reps, notes } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`https://firstrep.herokuapp.com/api/exerciseRecords/1`, input)
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
                value={routine_record_id}
                required
                onChange={handleChange("routine_record_id")}
                placeholder="routine_record_id"
              />
              <input
                value={exercise_id}
                required
                onChange={handleChange("exercise_id")}
                placeholder="exercise-id"
              />
              <input
                value={sets}
                required
                onChange={handleChange("sets")}
                placeholder="sets"
              />
              <input
                value={reps}
                required
                onChange={handleChange("reps")}
                placeholder="reps"
              />
              <textarea
                value={notes}
                required
                onChange={handleChange("notes")}
                placeholder="notes"
              />
            </div>
            <button>Record Workout</button>
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

export default ExerciseRecords;
