import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "./Profile.css";

export default class ProgressGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7"
        ],
        datasets: [
          {
            label: "Muscle Groups Worked",
            backgroundColor: "rgb(13, 90, 190, .5)",
            data: [3, 2, 5, 2, 3, 4, 2, 0]
          }
        ]
      }
    };
  }

  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      data.datasets.forEach(set => {
        set.borderColor = "black";
        set.borderWidth = 2;
        set.lineTension = 0.1;
      });
    }
    return data;
  };

  render() {
    return (
      <div className="progress-graph-container">
        <Line
          options={{
            responsive: true
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}
