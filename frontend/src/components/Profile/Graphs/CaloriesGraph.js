import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from 'react-redux';
import { MDBContainer } from "mdbreact";
import { addWeek, firstWeekCalories, secondWeekCalories, thirdWeekCalories, fourthWeekCalories } from '../../../actions/index'

class CaloriesPage extends React.Component {
  constructor() {
    super()
    this.state = {
      first_week_calories: '',
      second_week_calories: '',
      third_week_calories: '',
      fourth_week_calories: '',
      }
  }

  handleChangeFirstWeek = (evt) => {
    evt.preventDefault()
    
    this.props.firstWeekCalories(evt.target.value)

    this.setState({ first_week_calories: evt.target.value})
  }

  handleChangeSecondWeek = (evt) => {
    evt.preventDefault()
    
    this.props.secondWeekCalories(evt.target.value)

    this.setState({ second_week_calories: evt.target.value})
  }

  handleChangeThirdWeek = (evt) => {
    evt.preventDefault()
    
    this.props.thirdWeekCalories(evt.target.value)

    this.setState({ third_week_calories: evt.target.value})
  }

  handleChangeFourthWeek = (evt) => {
    evt.preventDefault()
    
    this.props.fourthWeekCalories(evt.target.value)

    this.setState({ fourth_week_calories: evt.target.value})
  }

  submitWeek = (evt) => {
    evt.preventDefault()

    const { first_week_calories, second_week_calories, third_week_calories, fourth_week_calories } = this.state
    this.props.addWeek(first_week_calories, second_week_calories, third_week_calories, fourth_week_calories)

    this.setState({
      first_week_calories: '',
      second_week_calories: '',
      third_week_calories: '',
      fourth_week_calories: '',
    })
  }

  render() {
    const { first_week_calories, second_week_calories, third_week_calories, fourth_week_calories } = this.state

    return (
      <div>
        <MDBContainer>
          <h3 className="mt-5">Calories Lost</h3>
          <h6>(calories/week)</h6>
          <Line data={this.props.dataLine} options={{ responsive: true }} />
        </MDBContainer>
        <div>
          <div>
            <form className='graph-form'>

            <input type="number" name="first_week_calories" placeholder="First Week" value={first_week_calories} onChange={this.handleChangeFirstWeek} />
            <br />
  
            <input type="number" name="second_week_calories" placeholder="Second Week" value={second_week_calories} onChange={this.handleChangeSecondWeek} />
            <br />
                      
            <input type="number" name="third_week_calories" placeholder="Third Week" value={third_week_calories} onChange={this.handleChangeThirdWeek} />
            <br />

            <input type="number" name="fourth_week_calories" placeholder="Fourth Week" value={fourth_week_calories} onChange={this.handleChangeFourthWeek} />
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
    dataLine: state.calories.dataLine,
  }
}

const mapDispatchToProps = {
  addWeek: addWeek,
  firstWeekCalories: firstWeekCalories,
  secondWeekCalories: secondWeekCalories,
  thirdWeekCalories: thirdWeekCalories,
  fourthWeekCalories: fourthWeekCalories,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CaloriesPage)
