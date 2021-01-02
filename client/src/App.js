import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Detiles from './components/Detiles';
import { Router , Link } from '@reach/router';
import axios from 'axios';

import {Shift} from 'ambient-cbg'

class App extends Component {
  render() {
    return (
      <Fragment>
         <Shift/>
        <Header />
        <Router>
        <Home path='/'/>
          <Detiles path="/:id"
          />
        </Router>
      </Fragment>

      
    );
  }
}

export default App;
