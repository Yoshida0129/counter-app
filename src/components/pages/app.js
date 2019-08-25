import React, {Component} from 'react';
import axios from 'axios';

import {appText} from '../atoms/appText';
import Loading from '../pages/loading';
import {progress} from '../molecules/table';
import {eventContainer} from '../molecules/event';

import '../../assets/common.css';
import '../../assets/index.css';

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
      <div 
        className="app"
      >
        <section
          className="title-container"
        >
          <h1>現在のdeath count</h1>
          <p
            className='count-font'
          >
            {this.state.count}
          </p>
        </section>
        <p
          className="comment"
        >
          {`最近の死は.........${this.state.reason}`}
        </p>
        <section
          className="progress-container"
        >
          <h2>進捗</h2>
        </section>
        {eventContainer()}
      </div>
    );
  }
}
