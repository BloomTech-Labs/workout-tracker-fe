import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from 'react-redux';
import { MDBContainer } from "mdbreact";
import { addWeek, firstWeek } from '../../../actions/index'
import "../../../css/Profile.css";

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

    handleChange = (evt) => {
      evt.preventDefault()
      
      this.props.firstWeek(1)
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
      <div className='weekly-workout form-container'>
      <MDBContainer>
        <h3 className="mt-5">Weekly Workout</h3>
        <Bar data={this.props.dataBar} options={this.props.barChartOptions} />
      </MDBContainer>
      <div>
          <div>
            <form onSubmit={this.submitWeek}>

            <input type="number" name="first_week" placeholder="First Week" value={first_week} onChange={this.handleChange} />
            <button type="submit">Add</button>
            <br />
  
            <input type="number" name="second_week" placeholder="Second Week" value={second_week} onChange={this.handleChange} />
            <button type="submit">Add</button>
            <br />
                      
            <input type="number" name="third_week" placeholder="Third Week" value={third_week} onChange={this.handleChange} />
            <button type="submit">Add</button>
            <br />

            <input type="number" name="fourth_week" placeholder="Fourth Week" value={fourth_week} onChange={this.handleChange} />
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartsPage)
