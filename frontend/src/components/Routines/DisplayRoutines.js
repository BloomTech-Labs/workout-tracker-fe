import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Route, Link } from "react-router-dom";
import "./routineStyle.css";

import ProfileNavbar from "../Profile/ProfileNavBar";

import "./displayroutine.css";

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
          <ol className="routine-list">
            {a.Exercise_Name}
            <button
              data-id={i + 1}
              onClick={showInstructions}
              className="toggleRoutine"
            >
              toggle instructions
            </button>
            <div className={isactive == i + 1 ? "" : "hidden"}>
              {console.log("this is the data ", a)}
              <li>{a.Instructions_Execution}</li>
              <li>{a.Instructions_Preparation}</li>
              <img style={{ width: "300px" }} src={a.GIF_Img} alt="" />\
            </div>
          </ol>
        ))}
        <button onClick={submitRoutine}>Finish</button>
      </form>
    );
  }
  return (
    <>
      <div className="add-routine-form">
        <ProfileNavbar />

        <ol className="routine-list" style={{ "padding-top": "60px" }}>
          <h3>Choose Routine From List Below</h3>
          {data.map(a => (
            <>
              <li className="list-style" data-value={a.id} onClick={submitReq}>
                {a.routine_name}
              </li>
            </>
          ))}
        </ol>
        <Route>
          <Link to="/add-routine">
            {" "}
            <span className="new-routine-link">
              Click Here To Create A New Routine
            </span>{" "}
          </Link>
        </Route>
      </div>
    </>
  );
}
export default DisplayRoutines;
