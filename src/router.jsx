import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import BloodBorne from './components/pages/BloodBorne'
import DarkSoul from './components/pages/Darksoul3'
import Battle from './components/pages/Battle'
import BattleDashboard from './components/pages/BattleDashboard'

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/blood_borne" component={BloodBorne}/>
        <Route exact path="/darksoul_3" component={DarkSoul}/>
        <Route exact path="/" component={Battle}/>
        <Route exact path="/battle" component={Battle}/>
        <Route exact path="/dashboard/:name" component={BattleDashboard}/>
      </BrowserRouter>
    )
  }
}