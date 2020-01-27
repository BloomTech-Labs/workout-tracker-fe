import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { addRoutine } from "../../actions/index";
import { connect } from "react-redux";
// import "./RecordRoutines.css";
import axios from "axios";
import "../../styles/index";
import Axios from "axios";

// const AddRoutine = props => {
//   const [indexes, setIndexes] = React.useState([]);
//   const [counter, setCounter] = React.useState(0);
//   const [ownerState, setOwnerState] = useState({
//     routine_name: ""
//   });
//   const { register, handleSubmit } = useForm();

//   const handleOwnerChange = e =>
//     setOwnerState({
//       ...ownerState.routine_name,
//       [e.target.name]: [e.target.value]
//     });

//   const onSubmit = data => {
//     console.log(data);
//     props.addRoutine(data, 1);
//   };

//   const { memberId } = props;

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
//         value={ownerState.routine_name}
//         onChange={handleOwnerChange}
//       />

//       {indexes.map(index => {
//         const fieldName = `routine_name[${index}]`;
//         return (
//           <fieldset name={fieldName} key={fieldName}>
//             <label>
//               Exercise {index}:
//               <input
//                 type="text"
//                 name={`${fieldName}.routine_description`}
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
// };

// const mapStateToProps = state => {
//   return {
//     routine: state.addRoutine
//   };
// };

const AddRoutine = props => {
  const [input, setInput] = useState({
    routine_name: "",
    routine_description: ""
  });

  const { routine_name, routine_description } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await axios
      .post(`https://firstrep.herokuapp.com/api/routines`, input)
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
            <button>Create Routine</button>
          </form>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     routine: state.addRoutine
//   };
// };

export default connect(mapStateToProps, { addRoutine })(AddRoutine);

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
