import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import BloodBorne from './components/pages/BloodBorne'
import DarkSoul from './components/pages/Darksoul3'

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={BloodBorne}/>
        <Route exact path="/darksoul_3" component={DarkSoul}/>
      </BrowserRouter>
    )
  }
}