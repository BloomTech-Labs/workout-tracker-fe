import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from 'react-redux';
import { MDBContainer } from "mdbreact";
import { addWeek, firstWeekMuscle, secondWeekMuscle, thirdWeekMuscle, fourthWeekMuscle, fifthWeekMuscle, sixWeekMuscle } from '../../../actions/index'


class MusclePage extends React.Component {
  constructor() {
    super()
    this.state = {
      first_week_muscle: '',
      second_week_muscle: '',
      third_week_muscle: '',
      fourth_week_muscle: '',
      fifth_week_muscle: '',
      six_week_muscle: '',
      }
  }

  handleChangeFirstWeek = (evt) => {
    evt.preventDefault()
    
    this.props.firstWeekMuscle(evt.target.value)

    this.setState({ first_week_muscle: evt.target.value})
  }

  handleChangeSecondWeek = (evt) => {
    evt.preventDefault()
    
    this.props.secondWeekMuscle(evt.target.value)

    this.setState({ second_week_muscle: evt.target.value})
  }

  handleChangeThirdWeek = (evt) => {
    evt.preventDefault()
    
    this.props.thirdWeekMuscle(evt.target.value)

    this.setState({ third_week_muscle: evt.target.value})
  }

  handleChangeFourthWeek = (evt) => {
    evt.preventDefault()
    
    this.props.fourthWeekMuscle(evt.target.value)

    this.setState({ fourth_week_muscle: evt.target.value})
  }

  handleChangeFifthWeek = (evt) => {
    evt.preventDefault()
    
    this.props.fifthWeekMuscle(evt.target.value)

    this.setState({ fifth_week_muscle: evt.target.value})
  }

  handleChangeSixWeek = (evt) => {
    evt.preventDefault()
    
    this.props.sixWeekMuscle(evt.target.value)

    this.setState({ six_week_muscle: evt.target.value})
  }

  submitWeek = (evt) => {
    evt.preventDefault()

    const { first_week_muscle, second_week_muscle, third_week_muscle, fourth_week_muscle, fifth_week_muscle, six_week_muscle } = this.state
    this.props.addWeek(first_week_muscle, second_week_muscle, third_week_muscle, fourth_week_muscle, fifth_week_muscle, six_week_muscle)

    this.setState({
      first_week_muscle: '',
      second_week_muscle: '',
      third_week_muscle: '',
      fourth_week_muscle: '',
      fifth_week_muscle: '',
      six_week_muscle: '',
    })
  }


render() {
  const { first_week_muscle, second_week_muscle, third_week_muscle, fourth_week_muscle, fifth_week_muscle, six_week_muscle } = this.state

    return (
    <div>
      <MDBContainer>
        <h3 className="mt-5">Muscle Worked</h3>
        <h6>(days/month)</h6>
        <Bar data={this.props.dataBar} options={this.props.barChartOptions} />
      </MDBContainer>
      <div>
          <div>
            <form className='graph-form'>

            <input type="number" name="first_week_muscle" placeholder="Chest" value={first_week_muscle} onChange={this.handleChangeFirstWeek} />
            <br />
  
            <input type="number" name="second_week_muscle" placeholder="Biceps" value={second_week_muscle} onChange={this.handleChangeSecondWeek} />
            <br />
                      
            <input type="number" name="third_week_muscle" placeholder="Triceps" value={third_week_muscle} onChange={this.handleChangeThirdWeek} />
            <br />

            <input type="number" name="fourth_week_muscle" placeholder="Back" value={fourth_week_muscle} onChange={this.handleChangeFourthWeek} />
            <br />

            <input type="number" name="fifth_week_muscle" placeholder="Deltoids" value={fifth_week_muscle} onChange={this.handleChangeFifthWeek} />
            <br />

            <input type="number" name="six_week_muscle" placeholder="Legs" value={six_week_muscle} onChange={this.handleChangeSixWeek} />
            <br />
            <button type="submit">Add</button>

            </form>
          </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataBar: state.muscle.dataBar,
    barChartOptions: state.muscle.barChartOptions,
  }
}

const mapDispatchToProps = {
  addWeek: addWeek,
  firstWeekMuscle: firstWeekMuscle,
  secondWeekMuscle: secondWeekMuscle,
  thirdWeekMuscle: thirdWeekMuscle,
  fourthWeekMuscle: fourthWeekMuscle,
  fifthWeekMuscle: fifthWeekMuscle,
  sixWeekMuscle: sixWeekMuscle,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusclePage)