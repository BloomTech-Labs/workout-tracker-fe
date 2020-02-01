import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddRoutine from "./AddRoutine";
// import "./RecordRoutines.css";
// import Search from "./Search";
import "../../styles/index";
import SignupStyle from "../../styles/index";

<<<<<<< HEAD:frontend/src/components/Routines/SearchBar.js
function SearchBar(props) {
  const [id, setId] = useState("");
=======
const SearchBar = props => {
  const [id, setId] = useState([]);
>>>>>>> 6bcb185a7f134fdfa8588ea2fc93fc6bb6e448cc:frontend/src/components/Routines/AddExercise.js

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
    let exerciseId = e.target.dataset.id;

<<<<<<< HEAD:frontend/src/components/Routines/SearchBar.js
    setId(val);

=======
    setId(id.concat({exercise_id: exerciseId, exercise_name: val}));
    console.log("val", val)
    console.log("array", id)
    // console.log(val.exercise_id)
>>>>>>> 6bcb185a7f134fdfa8588ea2fc93fc6bb6e448cc:frontend/src/components/Routines/AddExercise.js
    // axios
    //   .post(`https://firstrep.herokuapp.com/api/exrx/`, { search: id })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  // restricting search results
  let length = exercise.length / 2;
  let newData = exercise.slice(0, length);

  if (newData) {
    return (
      //   <SignupStyle>
      <>
        <AddExercise id={id} />
        <>
          <button onClick={clearExerciseList}>Clear Search Results</button>
          <form onSubmit={handleSubmit}>
            <input
              value={id}
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
<<<<<<< HEAD:frontend/src/components/Routines/SearchBar.js
=======
          <div>
            <ul>Added Exercises</ul>
            {id.map(a => (
              <>
              <li>{a.exercise_name}</li>
              </>
            ))}
          </div>
          <div>
            <ul>Search Results</ul>
            {newData.map(a => (
              <>
                <li>
                  {a.Exercise_Name_Complete}

                  <button
                    onClick={handleButtonClick}
                    data-id={a.Exercise_Id}
                    data-value={a.Exercise_Name_Complete}
                  >
                    Add Exercise
                  </button>
                </li>
              </>
            ))}
          </div>
>>>>>>> 6bcb185a7f134fdfa8588ea2fc93fc6bb6e448cc:frontend/src/components/Routines/AddExercise.js
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
      <AddRoutine exercises={id} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {console.log("this is ", id)}
        {indexes.map(index => {
          const fieldName = `exercise[${index}]`;
          return (
            <fieldset name={id} key={fieldName}>
              <label>
                Exercise {id}:
                <input
                  type="text"
                  name={`${fieldName}.exercise`}
                  ref={register}
                  value={id}
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
