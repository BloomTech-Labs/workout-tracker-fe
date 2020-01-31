import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddRoutine from "./AddRoutine";
// import "./RecordRoutines.css";
// import Search from "./Search";
import "../../styles/index";
import SignupStyle from "../../styles/index";

function SearchBar(props) {
  const [id, setId] = useState("");

  const [input, setInput] = useState({
    query: ""
  });

  const [data, setData] = useState("");
  const [exercise, setExercise] = useState("");

  const [name, setName] = useState("");

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
      .post(url, { search: query })
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    if (data) {
      setExercise(data.exercises);
      setName(data);
    }
  };

  const handleButtonClick = async e => {
    e.preventDefault();
    let val = e.target.dataset.value;
    setId(val);
  };

  // restricting search results
  let length = exercise.length / 2;
  let newData = exercise.slice(0, length);

  if (newData) {
    return (
      // <SignupStyle>
      <>
        <AddExercise id={id} />
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
                  <li>
                    {a.Exercise_Name_Complete}

                    <button
                      onClick={handleButtonClick}
                      data-value={a.Exercise_Name_Complete}
                    >
                      Add Exercise
                    </button>
                  </li>
                </>
              ))}
            </div>
          </form>
        </>
      </>
    );
  }

  return (
    <>
      <AddExercise id={id} />
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
    </>
  );
}

function AddExercise({ id }) {
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
    setIndexes(id => [...id, counter]);
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
    // <SignupStyle>
    <>
      <AddRoutine />
      <form onSubmit={handleSubmit(onSubmit)}>
        {console.log("this is ", id)}
        {indexes.map(index => {
          const fieldName = `exercise[${index}]`;
          return (
            <fieldset name={id[0]} key={fieldName}>
              <label>
                Exercise {id}:
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
    // </SignupStyle>
  );
}

export default SearchBar;

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
