import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import SimpleModal from "./SimpleModal";
function DisplayRoutines() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);
  const [exercise, setExercise] = useState([]);

  const [routineId, setRoutineId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://firstrep.herokuapp.com/api/routines/"
      );
      setData(result.data);
      setId(result.data.map(a => a.id));
    };
    fetchData();
  }, []);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isactive, setisactive] = useState("");
  const submitReq = async e => {
    setToggle(true);

    let val = e.target.dataset.value;
    setRoutineId(val);
    await axios
      .get(`https://firstrep.herokuapp.com/api/routines/${val}`)
      .then(res => setExercise(res.data.exercises))
      //   .then(res => setExercise(res.data))
      .catch(err => console.log(err));
    setLoading(true);
  };
  const showInstructions = async e => {
    e.preventDefault();
    let exerciseId = e.target.dataset.id;
    if (exerciseId == isactive) {
      setisactive("");
    } else {
      setisactive(exerciseId);
    }
  };

  const memberId = localStorage.getItem("userId");
  const submitRoutine = async e => {
    e.preventDefault();
    const url = `https://firstrep.herokuapp.com/api/memberRoutineRecords`;
    await axios
      .post(url, { member_id: memberId, routine_id: routineId })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  if (loading) {
    return (
      <form onSubmit={submitRoutine}>
        {console.log("this is exercise ", exercise)}
        {exercise.map((a, i) => (
          <ul>
            {a.Exercise_Name}
            <button data-id={i + 1} onClick={showInstructions}>
              toggle instructions
            </button>
            <div className={isactive == i + 1 ? "" : "hidden"}>
              <li>{a.Instructions_Execution}</li>
              <li>{a.Instructions_Preparation}</li>
            </div>
          </ul>
        ))}
        <button>Finish</button>
      </form>
    );
  }
  return (
    <>
      <Navbar />
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
    </>
  );
}
export default DisplayRoutines;
