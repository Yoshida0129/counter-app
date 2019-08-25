import React, {Component} from 'react';
export default class Loading extends Component {
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