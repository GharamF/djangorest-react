import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

class Detiles extends Component {
  state = {
    events: [],
  };
  componentDidMount() {
    console.log(this.props)
    this.resetState();
  }

  getEvents = () => {
    axios.get('/api/events/' + this.props.id).then(res => this.setState({ events: res.data }));
  };

  resetState = () => {
    this.getEvents();
  };

  render() {
    const events = this.state.events;
    return (
      <div>
<br/>
        <div className='container'>
          <div className="d-flex justify-content-center">
          <div class="jumbotron"> 
          
    
          <img src={events.imgs} width="500" height='250' />
            <h1> {events.eventname}  </h1>
            <p>  {events.desc}   --- from  {events.startdate} to {events.enddate}</p>
             
           <button className="btn  btn-dark text-light"><a href={events.location} style={{color:"white"}} > &#128205; Location </a></button>
            </div>
            </div>
          </div>
        </div>
            );
        
    
  };
}
export default Detiles;