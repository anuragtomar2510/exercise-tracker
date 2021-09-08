import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default class CreateExercise extends Component {

        constructor(props) {

                super(props);

                this.onChangeUsername = this.onChangeUsername.bind(this);
                this.onChangeDescription = this.onChangeDescription.bind(this);
                this.onChangeDuration = this.onChangeDuration.bind(this);
                this.onChangeDate = this.onChangeDate.bind(this);
                this.onSubmit = this.onSubmit.bind(this);

                this.state = {

                        username : '',
                        description : '',
                        duration : 0,
                        date : new Date(),
                        users : [] 

                }

        }

        onChangeUsername(e) {

                this.setState({

                  username: e.target.value

                })

        }
            
        onChangeDescription(e) {

                this.setState({

                        description: e.target.value

                })

        }
            
        onChangeDuration(e) {

                this.setState({

                        duration: e.target.value

                })

        }
            
        onChangeDate(date) {

                this.setState({

                        date: date

                })

        }
            
        onSubmit(e) {

                e.preventDefault();
            
                const exercise = {

                  username: this.state.username,
                  description: this.state.description,
                  duration: this.state.duration,
                  date: this.state.date

                }
            
                axios.post(`http://localhost:3300/exercises/add`, exercise)
                        .then((res) => console.log(res.data))
                        .catch((err) => console.log(err));
            
                window.location = '/';

        }


        render() {

                return(

                        <div>
                        <div className="my-4 alignclass"><h3>Create New Exercise Log</h3></div>
                        <form onSubmit={this.onSubmit}>
                          <div className="form-group mb-3"> 
                            <label>Username: </label>
                                <input type="text"
                                        required
                                        className="form-control"
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}>
                                </input>                           
                          </div>
                          <div className="form-group mb-3"> 
                            <label>Description: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                          </div>
                          <div className="form-group mb-3">
                            <label>Duration (in minutes): </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                                />
                          </div>
                          <div className="form-group mb-3">
                            <label>Date: </label>
                            <div>
                              <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                              />
                            </div>
                          </div>
                  
                          <div className="form-group">
                            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                          </div>
                        </form>
                      </div>
                )
        }


}