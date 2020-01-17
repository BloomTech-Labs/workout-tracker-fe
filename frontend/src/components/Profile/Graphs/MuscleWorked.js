import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import "./Profile.css";


class ChartsPage extends React.Component {
  state = {
    dataRadar: {
      labels: ["Chest", "Biceps", "Triceps", "Deltoid", "Back", "Legs"],
      datasets: [
        {
          label: "First Month",
          backgroundColor: "rgba(194, 116, 161, 0.5)",
          borderColor: "rgb(194, 116, 161)",
          data: [65, 59, 90, 81, 56, 55]
        },
        {
          label: "Second Month",
          backgroundColor: "rgba(71, 225, 167, 0.5)",
          borderColor: "rgb(71, 225, 167)",
          data: [28, 48, 40, 19, 96, 27]
        }
      ]
    }

  }


render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Muscle Worked</h3>
        <Radar data={this.state.dataRadar} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;