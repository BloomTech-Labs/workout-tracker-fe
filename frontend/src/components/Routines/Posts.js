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

const Posts = props => {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {props.posts.map((post, i) => (
        <div>
          <li>{post.Exercise_Name}</li>
          <button onClick={props.deleteExercise} data-id={i}></button>
        </div>
      ))}
    </ul>
  );
};
export default Posts;
