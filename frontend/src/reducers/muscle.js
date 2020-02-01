import {ADD_WEEK, FIRST_WEEK_MUSCLE, SECOND_WEEK_MUSCLE, THIRD_WEEK_MUSCLE, FOURTH_WEEK_MUSCLE, FIFTH_WEEK_MUSCLE, SIX_WEEK_MUSCLE} from '../actions/index';
import update from 'immutability-helper';

const initialState = {
    isLoading: false,
    errorMessage: null,
    weeks: [],
    dataBar: {
        labels: ["Chest", "Biceps", "Triceps", "Back", "Deltoids", "Legs"],
        datasets: [
          {
            label: "First Month",
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 218, 128,0.4)",
              "rgba(113, 205, 205,0.4)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 134, 159, 1)",
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(98,  182, 239, 1)",
              "rgba(255, 218, 128, 1)",
              "rgba(113, 205, 205, 1)",
              "rgba(98,  182, 239,0.4)",
              "rgba(255, 134, 159, 1)",
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
        case FIRST_WEEK_MUSCLE: {
            const value = action.payload.first_week_muscle

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
        
        case SECOND_WEEK_MUSCLE: {
          const value = action.payload.second_week_muscle

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

      case THIRD_WEEK_MUSCLE: {
        const value = action.payload.third_week_muscle

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

      case FOURTH_WEEK_MUSCLE: {
        const value = action.payload.fourth_week_muscle

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

      case FIFTH_WEEK_MUSCLE: {
        const value = action.payload.fifth_week_muscle

        return update(state, {
          dataBar: {
                datasets: {
                    0: {
                        data: {
                            4: {$set: value}
                        }
                    }
                }
            },
        })
      }

      case SIX_WEEK_MUSCLE: {
        const value = action.payload.six_week_muscle

        return update(state, {
          dataBar: {
                datasets: {
                    0: {
                        data: {
                            5: {$set: value}
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