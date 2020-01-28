import {ADD_WEEK, FIRST_WEEK, SECOND_WEEK, THIRD_WEEK, FOURTH_WEEK} from '../actions/index';
import update from 'immutability-helper';

const initialState = {
    isLoading: false,
    errorMessage: null,
    weeks: [],
    dataBar: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "First Month",
            data: [2, 3, 6, 7],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(113, 205, 205,0.4)"
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(98,  182, 239, 1)",
              "rgba(255, 218, 128, 1)",
              "rgba(113, 205, 205, 1)"
            ]
          },
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
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
        case FIRST_WEEK: {
            const value = action.payload.first_week

            return update(state, {
                dataBar: {
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
        
        case SECOND_WEEK: {
          const value = action.payload.second_week

          return update(state, {
              dataBar: {
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

      case THIRD_WEEK: {
        const value = action.payload.third_week

        return update(state, {
            dataBar: {
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

      case FOURTH_WEEK: {
        const value = action.payload.fourth_week

        return update(state, {
            dataBar: {
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