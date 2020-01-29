import {ADD_WEEK, FIRST_WEEK_CALORIES, SECOND_WEEK_CALORIES, THIRD_WEEK_CALORIES, FOURTH_WEEK_CALORIES} from '../actions/index';
import update from 'immutability-helper';

const initialState = {
    isLoading: false,
    errorMessage: null,
    weeks: [],
    dataLine: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "First Month",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(35, 26, 136)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0],
          },
          {
            label: "Second Month",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81]
          }
        ]
      },
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_WEEK: {
            const newWeek = state.week.concat([action.payload])

            return {
                ...state,
                week:newWeek
            }
        }
        case FIRST_WEEK_CALORIES: {
            const value = action.payload.first_week_calories

            return update(state, {
                dataLine: {
                    datasets: {
                      0: {
                        data: {
                            0: {$set: value}
                        }
                      }
                    }
                },
            })
        }
        
        case SECOND_WEEK_CALORIES: {
          const value = action.payload.second_week_calories

          return update(state, {
            dataLine: {
                  datasets: {
                      0: {
                          data: {
                              1: {$set: value}
                          }
                      }
                  }
              },
          })
      }

      case THIRD_WEEK_CALORIES: {
        const value = action.payload.third_week_calories

        return update(state, {
            dataLine: {
                datasets: {
                    0: {
                        data: {
                            2: {$set: value}
                        }
                    }
                }
            },
        })
      } 

      case FOURTH_WEEK_CALORIES: {
        const value = action.payload.fourth_week_calories

        return update(state, {
            dataLine: {
                datasets: {
                    0: {
                        data: {
                            3: {$set: value}
                        }
                    }
                }
            },
        })
      }
        default:
            return state
    }
}