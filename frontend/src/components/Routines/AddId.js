// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";

// // import "./RecordRoutines.css";
// import "../../styles/index";

// function AddExercise() {
//   const [indexes, setIndexes] = React.useState([]);
//   const [counter, setCounter] = React.useState(0);
//   const [ownerState, setOwnerState] = useState({
//     routine: ""
//   });
//   const { register, handleSubmit } = useForm();

//   const handleOwnerChange = e =>
//     setOwnerState({
//       ...ownerState,
//       [e.target.name]: [e.target.value]
//     });

//   const onSubmit = data => {
//     console.log(data);
//   };

//   const addExercise = () => {
//     setIndexes(prevIndexes => [...prevIndexes, counter]);
//     setCounter(prevCounter => prevCounter + 1);
//   };

//   const removeExercise = index => () => {
//     setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
//     setCounter(prevCounter => prevCounter - 1);
//   };

//   const clearExercises = () => {
//     setIndexes([]);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="routine">Routine</label>
//       <input
//         type="text"
//         name="routine"
//         id="routine"
//         value={ownerState.routine}
//         onChange={handleOwnerChange}
//       />

//       {indexes.map(index => {
//         const fieldName = `exercise[${index}]`;
//         return (
//           <fieldset name={fieldName} key={fieldName}>
//             <label>
//               Exercise {index}:
//               <input
//                 type="text"
//                 name={`${fieldName}.exercise`}
//                 ref={register}
//               />
//             </label>

//             <button type="button" onClick={removeExercise(index)}>
//               Remove
//             </button>
//           </fieldset>
//         );
//       })}

//       <button type="button" onClick={addExercise}>
//         Add Exercise
//       </button>
//       <button type="button" onClick={clearExercises}>
//         Clear Exercises
//       </button>
//       <input type="submit" />
//     </form>
//   );
// }

// export default AddExercise;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import { connect } from "react-redux";
// import "./RecordRoutines.css";
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
              {/* <input
                  value={routine_description}
                  required
                  onChange={handleChange("routine_description")}
                  placeholder="routine-description"
                  type="text"
                /> */}
            </div>
            <button>Create Routine</button>
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

export default connect(mapStateToProps)(AddId);
