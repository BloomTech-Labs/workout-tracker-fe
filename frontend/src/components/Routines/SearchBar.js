import React, { useState, useCallback, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
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
    setId(id.splice(key,1));
    console.log('key is ', key, 'newArr is ', newArr, 'id is ',)
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
    // e.preventDefault();
    let val = e.target.dataset.value;
  
    let exerciseId = e.target.dataset.id;
    setId(id.concat({ exercise_id: exerciseId, exercise_name: val }));
    {console.log('this is id ', id)}
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
      <>
       <Posts clearExerciseList={clearExerciseList} 
              handleSubmit={handleSubmit}
              posts={posts} 
              handleChange={handleChange('query')} 
              exerciseSubmit={exerciseSubmit} 
              handleButtonClick={handleButtonClick}
              deleteExercise={(e) => deleteExercise(e)}
              newData={exercise}
              posts={currentPosts}
              id={id} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={exercise.length}
        paginate={(e) => paginate(e)}
      />

      </>
    );
  }

  return (
    <div className="search-bar-2">
      <form className="form-bar" onSubmit={handleSubmit}>
        <input
          value={query}
          required
          onChange={handleChange("query")}
          placeholder="Search Exercise"
        />
      </form>
    </div>
  );
};

export default SearchBar;
