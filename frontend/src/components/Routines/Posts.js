import React from "react";
import "./posts.css";

const Posts = ({
  loading,
  id,
  newData,
  clearExerciseList,
  handleSubmit,
  posts,
  handleChange,
  deleteExercise,
  exerciseSubmit,
  handleButtonClick
}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <button onClick={clearExerciseList}>Clear Search Results</button>
      <form onSubmit={e => handleSubmit}>
        <input required onChange={handleChange} placeholder="Search Exercise" />
        <button onClick={handleSubmit}>Search</button>
      </form>
      <div className="div-exercises">
        <ul>Added Exercises</ul>
        {id.map((a, i) => (
          <>
            <li>
              {a.exercise_name}
              <button
                onClick={deleteExercise}
                data-id={i}
                className="toggleRoutine"
              >
                Remove
              </button>
            </li>
          </>
        ))}
        <button onClick={e => exerciseSubmit(e)}>Finish</button>
      </div>
      <div className="result-exercises">
        <ul>Search Results</ul>
        {posts.map(a => (
          <>
            <li style={{ width: "250px" }}>
              {a.Exercise_Name_Complete}
              <button
                onClick={e => handleButtonClick(e)}
                data-id={a.Exercise_Id}
                data-value={a.Exercise_Name_Complete}
                className="toggleRoutine"
              >
                Add Exercise
              </button>
            </li>
          </>
        ))}
      </div>
    </div>
  );
};
export default Posts;