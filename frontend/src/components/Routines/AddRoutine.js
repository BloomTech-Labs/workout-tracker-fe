import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { addRoutine } from "../../actions/index";
import { connect } from "react-redux";
// import "./RecordRoutines.css";
import "../../styles/index";

const AddRoutine = props => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [ownerState, setOwnerState] = useState({
    routine_name: ""
  });
  const { register, handleSubmit } = useForm();

  // {
  //   "routine_name":"routine_description"
  // }

  const handleOwnerChange = e =>
    setOwnerState({
      ...ownerState.routine_name,
      [e.target.name]: [e.target.value]
    });

  const onSubmit = data => {
    console.log(data);
    props.addRoutine(data, 1);
  };

  const { memberId } = props;

  const addExercise = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeExercise = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearExercises = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="routine">Routine</label>
      <input
        type="text"
        name="routine"
        id="routine"
        value={ownerState.routine_name}
        onChange={handleOwnerChange}
      />

      {indexes.map(index => {
        const fieldName = `routine_name[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              Exercise {index}:
              <input
                type="text"
                name={`${fieldName}.routine_description`}
                ref={register}
              />
            </label>

            <button type="button" onClick={removeExercise(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type="button" onClick={addExercise}>
        Add Exercise
      </button>
      <button type="button" onClick={clearExercises}>
        Clear Exercises
      </button>
      <input type="submit" />
    </form>
  );
};

const mapStateToProps = state => {
  return {
    routine: state.addRoutine
  };
};
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
