import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripFund from './Components/TripFund/TripFund'
import Bikes from './Components/Bikes/Bikes'
import Home from './Components/Home/Home'


class App extends Component {
  render()
  {
    return(
      <Router>
        <Switch>
          <Route path='/Home' component={Home} /> 
          <Route path='/TripFund' component={TripFund} />
          <Route path='/Bikes' component={Bikes} />
        </Switch>
      </Router>         
    )
  }
}

export default App;