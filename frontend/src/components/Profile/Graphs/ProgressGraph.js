import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from 'react-redux';
import { MDBContainer } from "mdbreact";
import { addWeek, firstWeek, secondWeek, thirdWeek, fourthWeek } from '../../../actions/index'

class ChartsPage extends React.Component {
    constructor() {
      super()
      this.state = {
        first_week: '',
        second_week: '',
        third_week: '',
        fourth_week: '',
        }
    }

    handleChangeFirstWeek = (evt) => {
      evt.preventDefault()
      
      this.props.firstWeek(evt.target.value)

      this.setState({ first_week: evt.target.value})
    }

    handleChangeSecondWeek = (evt) => {
      evt.preventDefault()
      
      this.props.secondWeek(evt.target.value)

      this.setState({ second_week: evt.target.value})
    }

    handleChangeThirdWeek = (evt) => {
      evt.preventDefault()
      
      this.props.thirdWeek(evt.target.value)

      this.setState({ third_week: evt.target.value})
    }

    handleChangeFourthWeek = (evt) => {
      evt.preventDefault()
      
      this.props.fourthWeek(evt.target.value)

      this.setState({ fourth_week: evt.target.value})
    }

    submitWeek = (evt) => {
      evt.preventDefault()

      const { first_week, second_week, third_week, fourth_week } = this.state
      this.props.addWeek(first_week, second_week, third_week, fourth_week)

      this.setState({
        first_week: '',
        second_week: '',
        third_week: '',
        fourth_week: '',
      })
    }

  render() {
    const { first_week, second_week, third_week, fourth_week } = this.state

    return (
      <div >
      <MDBContainer>
        <h3 className="mt-5">Weekly Workout</h3>
        <Bar data={this.props.dataBar} options={this.props.barChartOptions} />
      </MDBContainer>
      <div>
          <div>
            <form onSubmit={this.submitWeek} className='graph-form'>

            <input type="number" name="first_week" placeholder="First Week" value={first_week} onChange={this.handleChangeFirstWeek} />
            <br />
  
            <input type="number" name="second_week" placeholder="Second Week" value={second_week} onChange={this.handleChangeSecondWeek} />
            <br />
                      
            <input type="number" name="third_week" placeholder="Third Week" value={third_week} onChange={this.handleChangeThirdWeek} />
            <br />

            <input type="number" name="fourth_week" placeholder="Fourth Week" value={fourth_week} onChange={this.handleChangeFourthWeek} />
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
    weeks: state.graphs.weeks,
    dataBar: state.graphs.dataBar,
    barChartOptions: state.graphs.barChartOptions,
  }
}

const mapDispatchToProps = {
  addWeek: addWeek,
  firstWeek: firstWeek,
  secondWeek: secondWeek,
  thirdWeek: thirdWeek,
  fourthWeek: fourthWeek,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartsPage)
