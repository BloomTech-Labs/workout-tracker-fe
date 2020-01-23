import React, { useState } from "react";
import { postStatus } from "../../actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Onboard = props => {
  const [input, setInput] = useState({
    weight: '',
    height: '',
    bmi: '',
    bench_max: '',
    squat_max: '',
    mile_time: '',
  });

  const { weight, height, bmi, bench_max, squat_max, mile_time } = input;

  const handleChange = props => event => {
    setInput({ ...input, [props]: event.target.value });
  };

  const registerHandler = async event => {
    event.preventDefault();
    await props.postStatus(input);
    props.history.push("/profile");
  };

  return (
    <>
        <div className="status-forum">
          <div>
            <h2>Status Inputs</h2>
          </div>
          <div>
            <form onSubmit={registerHandler}>
              <div>
                <input
                  value={weight}
                  required
                  onChange={handleChange("weight")}
                  placeholder="Weight"
                />
                <input
                  value={height}
                  required
                  onChange={handleChange("height")}
                  placeholder="Height"
                />
                <input
                  value={bmi}
                  required
                  onChange={handleChange("bmi")}
                  placeholder="Body Mass Index"
                />
                <input
                  value={bench_max}
                  required
                  onChange={handleChange("bench_max")}
                  placeholder="Bench Max"
                />
                <input
                  value={squat_max}
                  required
                  onChange={handleChange("squat_max")}
                  placeholder="Squat Max"
                />
                <input
                  value={mile_time}
                  required
                  onChange={handleChange("mile_time")}
                  placeholder="Mile Time"
                />
                
              </div>
              <button>Submit User Stats</button>
            </form>
          </div>
        </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time,
  };
};
export default withRouter(connect(mapStateToProps, { postStatus })(Onboard));
