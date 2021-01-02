
import React, { Component } from "react";
import { Link } from '@reach/router';
import NewEventModal from "./NewEventModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import Moment from 'react-moment';
import axios from 'axios';




class EventList extends Component {
  render() {

    const events = this.props.events;
    return (
      
      <div className='container'>
        <div className="d-flex justify-content-center">

          {events.map((event, idx) => {
            return (
              <div key={idx}>
                
                <div className="card m-2">
                  <div className="card-body">
    
                    <img src={event.imgs} width="300" height='150' />
                    <h3 className={new Date(event.enddate) < new Date() ? 'text-danger' : ''}>{event.eventname}</h3>
                    <h6 className={new Date(event.enddate) < new Date() ? 'text-danger' : ''}>Start Date:
                      <Moment format="YYYY/MM/DD">
                    {event.startdate}
                      </Moment></h6>
                    <h6 className={new Date(event.enddate) < new Date() ? 'text-danger' : ''} >End Date:
                <Moment format="YYYY/MM/DD">
                        {event.enddate}
                      </Moment></h6>
                    {new Date(event.enddate) < new Date() ? '' :
                    <Link to={'/'+ event.id}>More Information..</Link>
                    }
                    <br/>
                    <hr/>

                    {new Date(event.enddate) < new Date() ? '' :<NewEventModal
                      create={false}
                      event={event}
                      resetState={this.props.resetState}
                    /> }
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                      id={event.id}
                      resetState={this.props.resetState}
                    />
                    
                  </div>
                </div> 
              </div> 
            )
          })}


        </div>
      </div>

    )
  };
}
export default EventList;
