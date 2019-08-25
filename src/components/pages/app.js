import React, {Component} from 'react';
import axios from 'axios';

import {appText} from '../atoms/appText';
import Loading from '../pages/loading';
import {progress} from '../molecules/table';
import {eventContainer} from '../molecules/event';

import '../../assets/common.css';
import '../../assets/style.css';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      reason: ''
    }
  }

  componentDidMount(){
    axios
      .get(process.env.REACT_APP_API_KEY)
      .then((res) => {
        this.setState(res.data)
      })
  }

  render () {
    if(!this.state.reason){
      return(
        <Loading/>
      )
    }
    return (
      <div className="app white-bc">
        {appText(this.state.count, 60)}
        {appText('最近の死は.........' + this.state.reason, 24)}
        {progress([{
          progress: 'string',
          count: 1,
          time: 12
        },
        {
          progress: 'string',
          count: 1,
          time: 12
        }])}
        {eventContainer()}
      </div>
    );
  }
}
