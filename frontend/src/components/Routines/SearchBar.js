import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// import "./RecordRoutines.css";
// import Search from "./Search";
// import "../../styles/index";
import SignupStyle from "../../styles/index";
import Pagination from "./Pagination";

import { MDBDataTable } from "mdbreact";

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

  const deleteExercise = async e => {
    let key = e.target.dataset.id;
    let newArr = id;
    newArr.splice(key, 1);
    setId(newArr);
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
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setClick(true);
    props.history.push(`/display-routine/`);
  };

  // restricting search results
  // let length = exercise.length / 2;
  // let newData = exercise;

  // const [inputs, setInputs] = useState({
  //   perPage: 6,
  //   currentPage: 1
  // });

  // let { perPage, currentPage } = inputs;

  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const page = number => {
    setCurrentPage(number);
  };

  const last = currentPage * perPage;
  const first = last - perPage;
  const newData = exercise.slice(first, last);

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
                    <button onClick={deleteExercise} data-id={i}>
                      Remove
                    </button>
                  </li>
                </>
              ))}
              <button onClick={exerciseSubmit}>Finish</button>
            </form>
            <div>
              <ul>Search Results</ul>
              {exercise.map(a => (
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
            <Pagination
              total={exercise.length}
              perPage={perPage}
              page={page}
              selected={currentPage}
            />
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
