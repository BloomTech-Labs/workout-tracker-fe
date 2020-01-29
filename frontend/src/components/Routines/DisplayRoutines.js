import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function DisplayRoutines() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://firstrep.herokuapp.com/api/routines/"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.map(a => (
        <li>{a.routine_name}</li>
      ))}
    </ul>
  );
}

export default DisplayRoutines;
