import React, { useState } from "react";
import axios from "axios";

const SearchBar = props => {
  const [input, setInput] = useState({
    query: ""
  });

  const [data, setData] = useState("");

  const { query } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
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
                <li>{a}</li>
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
        {/* {this.state.people.map(person => (
          <ul key={person.name}>
            <li>{person.name}</li>
          </ul>
        ))} */}
      </form>
    </>
  );
};

export default SearchBar;

// class Search extends React.Component {
//   token = null;
//   state = {
//     query: ""
//   };

//   onChange = e => {
//     const { value } = e.target;
//     this.setState({
//       query: value
//     });
//     this.search({ search: value });
//   };

//   search = query => {
//     const url = `https://swapi.co/api/people?search=${query}`;
//     const token = {};
//     this.token = token;
//     let parsedQuery = JSON.stringify(query);
//     axios
//       .post(`https://firstrep.herokuapp.com/api/exrx/`, parsedQuery)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   //  x handleChange = props => event => {
//   //     setInput({ ...input, [props]: event.target.value });
//   //   };

//   handleSubmit = data => {
//     this.search(data);
//   };
//   componentDidMount() {
//     this.handleSubmit("");
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           className="search-box"
//           placeholder="Search for..."
//           onChange={this.onChange}
//           value={this.state.query}
//         />
//         {/* {this.state.people.map(person => (
//           <ul key={person.name}>
//             <li>{person.name}</li>
//           </ul>
//         ))} */}
//       </form>
//     );
//   }
// }

// export default Search;

// import React, { useState } from "react";
// import axios from "axios";

// const Search = props => {
//   const [input, setInput] = useState({
//     query: "",
//     data: ""
//   });

//   const { query, data } = input;

//   const handleChange = props => event => {
//     setInput({ ...input, [props]: event.target.value });
//   };

//   const handleSubmit = async query => {
//     let parsedQuery = JSON.stringify(query);
//     await axios
//       .post(`https://firstrep.herokuapp.com/api/exrx/`, parsedQuery)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };
//   return (
//     <>
//       {/* <Navbar /> */}

//       <div className="form-container">
//         <div>
//           <h2>Add A Routine</h2>
//         </div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 value={query}
//                 required
//                 onChange={handleChange("query")}
//                 placeholder="search-exercise"
//               />
//             </div>
//             <button>Search Exercise</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;
