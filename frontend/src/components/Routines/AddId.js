import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../styles/index";

const AddId = props => {
  const [input, setInput] = useState({
    exercise_id: []
  });

  const { exercise_id } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`https://firstrep.herokuapp.com/api/routinesexercises/12`, input)
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
                value={exercise_id}
                required
                onChange={handleChange("exercise_id")}
                placeholder="exercise-id"
              />
            </div>
            <button>Create Routine</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddId;
