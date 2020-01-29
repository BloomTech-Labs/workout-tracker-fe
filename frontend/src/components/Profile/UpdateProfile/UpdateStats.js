import React, { useState } from "react";
import { updateStatus } from "../../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const UpdateStats = props => {
  const [input, setInput] = useState({
    member_id: '',
    weight: '',
    height: '',
    bmi: '',
    bench_max: '',
    squat_max: '',
    mile_time: '',
  });

  const { member_id, weight, height, bmi, bench_max, squat_max, mile_time } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const registerHandler = async event => {
    event.preventDefault();
    await props.updateStatus(input);
    props.history.push("/profile");
  };
  // if(testForStats()) {
  return (
    <>
        <div className="status-forum">
          <div>
            <h2>Update Profile Stats</h2>
          </div>
          <div>
            <form onSubmit={registerHandler}>
              <div>
                <input value={weight} required onChange={handleChange("weight")} placeholder="Weight" />

                <input value={height} required onChange={handleChange("height")} placeholder="Height" />

                <input value={bmi} required onChange={handleChange("bmi")} placeholder="Body Mass Index" />

                <input value={bench_max} required onChange={handleChange("bench_max")} placeholder="Bench Max" />

                <input value={squat_max} required onChange={handleChange("squat_max")} placeholder="Squat Max" />

                <input value={mile_time} required onChange={handleChange("mile_time")} placeholder="Mile Time" />

              </div>
              <button>Update User Stats</button>
            </form>
          </div>
        </div>
    </>
  );
  // } else {
  //   return (
  //     <>
  //     <div>
  //       <h1>Stats have already been set. Go to profile if you wish to update them.</h1>
  //     </div>
  //     </>
  //   )
  // }
};

UpdateStats.propTypes = {};

const mapStateToProps = state => {
  return {
    member_id: state.member_id,
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time,
  };
};

export default withRouter(connect(mapStateToProps, { updateStatus })(UpdateStats));
