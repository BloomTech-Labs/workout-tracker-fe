import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleModal from "./SimpleModal";

function DisplayRoutines() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [exercise, setExercise] = useState([]);
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

  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitReq = async e => {
    setToggle(true);
    let val = e.target.dataset.value;
    await axios
      .get(`https://firstrep.herokuapp.com/api/routines/${val}`)
      .then(res => setExercise(res.data.exercises))
      //   .then(res => setExercise(res.data))
      .catch(err => console.log(err));
    setLoading(true);
  };

  if (loading) {
    return (
      <div>
        {exercise.map(a => (
          <ul>
            {a.Exercise_Name}
            <li>{a.Instructions_Execution}</li>
            <li>{a.Instructions_Preparation}</li>
          </ul>
        ))}
      </div>

      // Use this to render data above, also switch setExercise to res.data
      //   <div>
      //     hi
      //     {console.log("this is data", exercise)}
      //   </div>
    );
  }

  return (
    <ul>
      {console.log("data is ", data)}

      {data.map(a => (
        <>
          <ul data-value={a.id} onClick={submitReq}>
            {a.routine_name}
          </ul>
          {/* <button onClick={submitReq}>click</button> */}
        </>
      ))}
    </ul>
  );
}

export default DisplayRoutines;
