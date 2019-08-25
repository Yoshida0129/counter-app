import React, {Component} from 'react';
import {appButton} from '../atoms/appButton';

export default class ButtonContent extends Component {
  btnStyle = {
    'width': 200,
    'height': 50,
    'fontSize': 40,
    'boxShadow': '0px 4px 10px 3px rgba(0,0,0,0.2)'
  }

  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>
        {appButton(this.props.countUp, '+', this.btnStyle)}
        {appButton(this.props.countDown, '-', this.btnStyle)}
      </div>
    )
  }
}