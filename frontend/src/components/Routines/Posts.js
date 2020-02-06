// import React from "react";

// function Posts({
//   posts,
//   loading,
//   deleteExercise,
//   exerciseSubmit,
//   handleButtonClick
// }) {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <form>
//         <ul>Added Exercises</ul>
//         {posts.map((a, i) => (
//           <>
//             <li>
//               {a.exercise_name}
//               <button onClick={deleteExercise} data-id={i}>
//                 Remove
//               </button>
//             </li>
//           </>
//         ))}
//         <button onClick={exerciseSubmit}>Finish</button>
//       </form>

//       <div>
//         <ul>Search Results</ul>
//         {exercise.map(a => (
//           <>
//             <li>
//               {a.Exercise_Name_Complete}
//               <button
//                 onClick={handleButtonClick}
//                 data-id={a.Exercise_Id}
//                 data-value={a.Exercise_Name_Complete}
//               >
//                 Add Exercise
//               </button>
//             </li>
//           </>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Posts;

import React from "react";
import './Post.css'

const Posts = ({ loading, id, newData, clearExerciseList, handleSubmit, posts, handleChange, deleteExercise, exerciseSubmit, handleButtonClick,  }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  

  return (
    <div className="search-bar">
    <button onClick={clearExerciseList}>Clear Search Results</button>
    <form onSubmit={(e) => handleSubmit}>
      <input
        required
        onChange={handleChange}
        placeholder="Search Exercise"
      />
      <button onClick={handleSubmit}>Search</button>
      </form>
      <div className="div-exercises">
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
        <button onClick={(e) => exerciseSubmit(e)}>Finish</button>
      </div>
      <div className="result-exercises">
        <ul>Search Results</ul>
        {posts.map(a => (
          <>
            <li>
              {a.Exercise_Name_Complete}
              <button
                onClick={(e) => handleButtonClick(e)}
                data-id={a.Exercise_Id}
                data-value={a.Exercise_Name_Complete}
                className="toggleRoutine">
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
