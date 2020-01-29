import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

// import "./RecordRoutines.css";
import "../../styles/index";

function AddExercise() {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [ownerState, setOwnerState] = useState({
    routine: ""
  });
  const { register, handleSubmit } = useForm();

  const handleOwnerChange = e =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value]
    });

  const onSubmit = data => {
    console.log(data);
  };

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
        value={ownerState.routine}
        onChange={handleOwnerChange}
      />

      {indexes.map(index => {
        const fieldName = `exercise[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              Exercise {index}:
              <input
                type="text"
                name={`${fieldName}.exercise`}
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
}

export default AddExercise;
