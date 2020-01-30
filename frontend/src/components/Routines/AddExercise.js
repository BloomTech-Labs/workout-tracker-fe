import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddRoutine from "./AddRoutine";
// import "./RecordRoutines.css";
// import Search from "./Search";
import "../../styles/index";

const SearchBar = props => {
  const [input, setInput] = useState({
    query: ""
  });

  const [data, setData] = useState("");

  const { query } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const clearExerciseList = e => {
    e.preventDefault();
    setData([]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const url = `https://firstrep.herokuapp.com/api/exrx/`;
    await axios
      .post(
        url,
        { search: query }
        // { headers: { "Content-Type": "application/json" } }
      )
      //   .then(res => setData(res))
      .then(res =>
        setData(res.data.exercises.map(a => a.Exercise_Name_Complete))
      )
      .catch(err => console.log(err));
  };

  // restricting search results
  let length = data.length / 2;
  let newData = data.slice(0, length);

  if (newData) {
    return (
      <>
        <button onClick={clearExerciseList}>Clear Search Results</button>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            required
            onChange={handleChange("query")}
            placeholder="Search Exercise"
          />
          <div>
            <ul>List of Exercises</ul>
            {newData.map(a => (
              <>
                <li datatype={a.Ex}>
                  {a}
                  <button onClick={{}}>Add Exercise</button>
                </li>
              </>
            ))}
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          required
          onChange={handleChange("query")}
          placeholder="Search Exercise"
        />
      </form>
    </>
  );
};

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

  const clearExerciseList = () => {};

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <AddRoutine />
        {/* <label htmlFor="routine">Routine</label>
        <input
          type="text"
          name="routine"
          id="routine"
          value={ownerState.routine}
          onChange={handleOwnerChange}
        /> */}

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

      <SearchBar />
    </>
  );
}

export default AddExercise;
