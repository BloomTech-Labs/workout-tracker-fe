import React from "react";
import { connect } from 'react-redux';
import { updateStatus } from '../../../actions/index';
import { withRouter } from "react-router-dom";
import ProfileNavbar from '../ProfileNavBar'

class updateStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.location.status.id || "",
      weight: props.location.status.weight || "",
      height: props.location.status.height || '',
      bmi: props.location.status.bmi || '',
      bench_max: props.location.status.bench_max || '',
      squat_max: props.location.status.squat_max || '',
      mile_time: props.location.status.mile_time || '',
    }
  }

  componentDidMount() {
    console.log(this.props.location.status)
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
			[evt.target.name]: evt.target.value,
		})
  }

  submitUpdate = (evt) => {
    evt.preventDefault()

    this.props.updateStatus(this.state)

    this.setState({
      id: '',
      weight: '',
      height: '',
      bmi: '',
      bench_max: '',
      squat_max: '',
      mile_time: '',
    })
    this.props.history.push("/profile");
  }

render() {

  const { id, weight, height, bmi, bench_max, squat_max, mile_time } = this.state

  return (
    <div className="status-forum onboarding-height">
        <ProfileNavbar />
          <div>
            <h2>Update Profile Information</h2>
          </div>
          <form className='onboarding-input' onSubmit={this.submitUpdate}>
            <div>
              <input name='weight' type="number" value={weight} onChange={this.handleChange} placeholder="Weight" />
    
              <input name='height' type="number" value={height} onChange={this.handleChange} placeholder="Height" />
    
              <input name='bmi' type="number" value={bmi} onChange={this.handleChange} placeholder="Body Mass Index" />
    
              <input name='bench_max' type="number" value={bench_max} onChange={this.handleChange} placeholder="Bench Max" />
    
              <input name='squat_max' type="number" value={squat_max} onChange={this.handleChange} placeholder="Squat Max" />
    
              <input name='mile_time' type="number" value={mile_time} onChange={this.handleChange} placeholder="Mile Time" />
    
            </div>
              <button>Submit User Stats</button>
          </form>
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.status_id,
    weight: state.weight,
    height: state.height,
    bmi: state.bmi,
    bench_max: state.bench_max,
    squat_max: state.squat_max,
    mile_time: state.mile_time,
  }
}

const mapDispatchToProps = {
  updateStatus: updateStatus,
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(updateStats))