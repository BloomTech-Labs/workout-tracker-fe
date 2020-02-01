import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AddRoutine from "./AddRoutine";
// import "./RecordRoutines.css";
// import Search from "./Search";
// import "../../styles/index";
import SignupStyle from "../../styles/index";

const SearchBar = props => {
  const [id, setId] = useState([]);
  const [click, setClick] = useState(false);
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
    setExercise([]);
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
    setId(id.concat({ exercise_id: exerciseId, exercise_name: val }));
  };

  const exerciseSubmit = async e => {
    await axios
      .post(
        `https://firstrep.herokuapp.com/api/routinesexercises/${props.match.params.id}`,
        { exercise_id: id.map(a => a.exercise_id) }
      )
      .then(res => props.history.push(`/display-routine/`))
      .catch(err => console.log(err));
    setClick(true);
  };

  // restricting search results
  let length = exercise.length / 2;
  let newData = exercise.slice(0, length);

  if (newData) {
    return (
      <>
        <>
          <button onClick={clearExerciseList}>Clear Search Results</button>
          <form onSubmit={handleSubmit}>
            <input
              required
              onChange={handleChange("query")}
              placeholder="Search Exercise"
            />
            <form>
              <ul>Added Exercises</ul>
              {id.map((a, i) => (
                <>
                  <li>
                    {a.exercise_name}
                    <button data-id={i}>Remove</button>
                  </li>
                </>
              ))}
              <button onClick={exerciseSubmit}>Finish</button>
            </form>
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
          </form>
        </>
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
