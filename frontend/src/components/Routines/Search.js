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
      .post(url, { search: query })

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
      <form onSubmit={e => handleSubmit(e)}>
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
