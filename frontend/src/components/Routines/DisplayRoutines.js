import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "../Login";
import Navbar from "../Navbar";
import { Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import SimpleModal from "./SimpleModal";

function DisplayRoutines(props) {
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

  const { history } = props;

  const submitRoutine = async (props, e) => {
    const url = `https://firstrep.herokuapp.com/api/memberRoutineRecords`;
    await axios
      .post(url, { member_id: memberId, routine_id: routineId })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // const onButton = props => {
  //   props.history.push("/login");
  // };

  if (loading) {
    return (
      <form className="display-form">
        {console.log("this is exercise ", exercise)}
        {exercise.map((a, i) => (
          <ul>
            {a.Exercise_Name}
            <button data-id={i + 1} onClick={showInstructions}>
              toggle instructions
            </button>
            <div className={isactive == i + 1 ? "" : "hidden"}>
              {console.log("this is the data ", a)}
              <li>{a.Instructions_Execution}</li>
              <li>{a.Instructions_Preparation}</li>
              <img style={{ width: "300px" }} src={a.GIF_Img} alt="" />\
            </div>
          </ul>
        ))}
        <button onClick={submitRoutine}>Finish</button>
      </form>
    );
  }
  return (
    <>
      <Navbar />
      <ul style={{ "padding-top": "60px" }}>
        {console.log("data is ", data)}
        <h3>Choose Routine From List Below</h3>
        {data.map(a => (
          <>
            <ul data-value={a.id} onClick={submitReq}>
              {a.routine_name}
            </ul>
            {/* <button onClick={submitReq}>click</button> */}
          </>
        ))}
      </ul>
      <Route>
        <Link to="/add-routine">Click Here To Create A New Routine</Link>
      </Route>
    </>
  );
}
export default DisplayRoutines;
