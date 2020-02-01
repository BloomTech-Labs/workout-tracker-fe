import React, { useState } from "react";
import axios from "axios";
import SignupStyle from "../../styles/index";
import Navbar from "../Navbar";

function Workout({}) {
  const [input, setInput] = useState({
    sets: "",
    reps: "",
    weight: ""
  });

  const { sets, reps, weight } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    axios
      .post(`https://firstrep.herokuapp.com/api/memberRecords`, input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      {/* <SignupStyle> */}
      <div className="form-container">
        <div>
          <h2>Record Your Workout</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={sets}
                required
                onChange={handleChange("sets")}
                placeholder="How many sets performed"
                type="number"
              />
              <input
                value={reps}
                required
                onChange={handleChange("reps")}
                placeholder="How many reps performed"
                type="number"
              />
              <input
                value={weight}
                required
                onChange={handleChange("weight")}
                placeholder="How much weight"
                type="number"
              />
            </div>
            <button>Record Routine</button>
          </form>
        </div>
      </div>
      {/* </SignupStyle> */}
    </>
  );
}

export default Workout;
