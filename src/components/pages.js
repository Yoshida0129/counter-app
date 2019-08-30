import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom'

import {progress, eventContainer, commentList} from './molecules';

import '../assets/common.css';
import '../assets/index.css';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={Counter}/>
        <Route path="/tournament" component={Tournament}/>
      </BrowserRouter>
    )
  }
}

class Counter extends Component {
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
        {commentList(this.state.comment)}
        {eventContainer()}
      </div>
    );
  }
}

class Tournament extends Component {
  render() {
    return(
      <div>
        <p>製作中・・・（見通しは立ってない）</p>
      </div>
    )
  }
}

class Loading extends Component {
  constructor(){
    super()
    this.state = {
      dot: '...'
    }
  }
  
  render(){
    return (
      <div>
        Loading now {this.state.dot}
      </div>
    )
  }
}
