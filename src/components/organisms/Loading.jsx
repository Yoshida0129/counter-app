import React, {Component} from 'react';

import '../../assets/common.css';
import '../../assets/index.css';

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