import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
// import "./RecordRoutines.css";
// import Search from "./Search";
// import "../../styles/index";
import "./searchbar.css";

import Posts from "./Posts";
import Pagination from "./Pagination";

const SearchBar = props => {
  const [id, setId] = useState([]);
  const [click, setClick] = useState(false);
  const [input, setInput] = useState({
    query: ""
  });
  const [data, setData] = useState("");
  const [exercise, setExercise] = useState([{Exercise_Name_Complete: "Squat"}, {Exercise_Name_Complete: "Bench"}]);
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
    e.preventDefault();
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

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // restricting search results
  // let length = exercise.length / 2;
  let newData = exercise;

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (newData) {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = exercise.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className="search-bar">
        <button onClick={clearExerciseList}>Clear Search Results</button>
        <form>
          <input
            required
            onChange={handleChange("query")}
            placeholder="Search Exercise"
          />
          <button onClick={handleSubmit}>Search</button>
          <form>
            <ul>Added Exercises</ul>
            {id.map((a, i) => (
              <>
                <li>
                  {a.exercise_name}
                  <button onClick={deleteExercise} data-id={i} className="toggleRoutine">
                    Remove
                  </button>
                </li>
              </>
            ))}
            <button onClick={exerciseSubmit}>Finish</button>
          </form>
          <div>
            <ul>Search Results</ul>
            <div className="container mt-5">
              <Posts
                posts={currentPosts}
                loading={loading}
                deleteExercise={deleteExercise}
              />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={exercise.length}
                paginate={paginate}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="search-bar">
      <form className="form-bar" onSubmit={handleSubmit}>
        <input
          value={query}
          required
          onChange={handleChange("query")}
          placeholder="Search Exercise"
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
