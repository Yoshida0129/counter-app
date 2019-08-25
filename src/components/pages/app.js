import React, {Component} from 'react';
import axios from 'axios';

import {appText} from '../atoms/appText';
import ButtonContents from '../molecules/buttonContents'
import Loading from '../pages/loading';
import {progress} from '../molecules/table';

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

  countUp(){
    this.setState({count: this.state.count += 1});
  }

  countDown(){
    this.setState({count: this.state.count -= 1});
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
        <ButtonContents
          countUp={this.countUp.bind(this)}
          countDown={this.countDown.bind(this)}
        />
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
      </div>
    );
  }
}
