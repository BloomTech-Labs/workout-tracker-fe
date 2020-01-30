import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// import "./RecordRoutines.css";
import Search from "./Search";
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

  // search bar

  //   const [apiResults, setApiResults] = useState([]);
  //   const [queryString, setQueryString] = useState([]);

  //   const search = exercise => {
  //     axios
  //       .post(`https://firstrep.herokuapp.com/api/routines`, exercise)
  //       .then(res => setApiResults({ res }));
  //   };

  //   const onChange = e => {
  //     setQueryString({
  //       ...queryString,
  //       [e.target.name]: [e.target.value]
  //     });
  //     search(e.target.value);
  //   };

  return (
    <>
      <Search />
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
    </>
  );
}

export default AddExercise;
