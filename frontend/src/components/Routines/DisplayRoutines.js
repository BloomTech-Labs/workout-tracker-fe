import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function DisplayRoutines() {
  const [data, setData] = useState([{}]);
  const [id, setId] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://firstrep.herokuapp.com/api/routines/"
      );
      setData(result.data);
      setId(result.data);
    };
    fetchData();
  }, []);

  const submitReq = data => {
    axios
      .get(`https://firstrep.herokuapp.com/api/routines/${data}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // onClick={obj['routine_name']}

  // counter
  return (
    <ul>
      {console.log("id is ", id)}
      {data.map(a => (
        <li onClick={submitReq(a.id)}>{a.routine_name}</li>
      ))}
    </ul>
  );
}

export default DisplayRoutines;
