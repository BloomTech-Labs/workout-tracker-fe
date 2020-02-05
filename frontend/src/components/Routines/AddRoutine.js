import React, { useState, useRoutes, useRedirect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { addRoutine } from "../../actions/index";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
// import "./RecordRoutines.css";
import axios from "axios";
import "./addroutine.css";
import "../../styles/index";
import Axios from "axios";
import ProfileNavbar from "../Profile/ProfileNavBar";
import "./routineStyle.css"

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
      // .then(res=>console)
      .catch(err => console.log(err));

    //
  };

  return (
    <>
      <div>
      <ProfileNavbar/>
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

// import React, { useState } from "react";

// const AddRoutine = props => {
//   const [ownerState, setOwnerState] = useState({
//     owner: "",
//     routine_name: ""
//   });

//   const handleOwnerChange = e =>
//     setOwnerState({
//       ...ownerState,
//       [e.target.name]: [e.target.value]
//     });
//   // sets: "", reps: "", weight: ""
//   const blankExercise = { routine_description: "" };
//   const [exerciseState, setExerciseState] = useState([{ ...blankExercise }]);

//   const onSubmit = data => {
//     console.log("this is ", data);
//     props.addRoutine(data);
//   };

//   const addExercise = () => {
//     setExerciseState([...exerciseState, { ...blankExercise }]);
//   };

//   const handleExerciseChange = e => {
//     const updatedExercises = [...exerciseState];
//     updatedExercises[e.target.dataset.idx][e.target.className] = e.target.value;
//     setExerciseState(updatedExercises);
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <label htmlFor="routine">Routine</label>
//       <input
//         type="text"
//         name="routine_name"
//         id="routine"
//         value={ownerState.routine_name}
//         onChange={handleOwnerChange}
//       />
//       <input type="button" value="Add New Exercise" onClick={addExercise} />
//       {exerciseState.map((val, idx) => {
//         const numId = `name-${idx}`;
//         const exerciseId = `exercise-${idx}`;
//         return (
//           <div key={`cat-${idx}`}>
//             <label htmlFor={numId}>{`Exercise #${idx + 1}`}</label>
//             <input
//               type="text"
//               data-idx={idx}
//               className="name"
//               value={exerciseState[idx].exercise}
//               onChange={handleExerciseChange}
//             />
//           </div>
//         );
//       })}
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     routine: state.addRoutine
//   };
// };
// export default connect(mapStateToProps, { addRoutine })(AddRoutine);