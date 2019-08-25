import React, {Component} from 'react';
import axios from 'axios';

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
      .get(process.env.REACT_APP_API_URL)
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
          {progress(this.state.progress)}
        </section>
        {eventContainer()}
      </div>
    );
  }
}
