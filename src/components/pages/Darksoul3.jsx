import React, {Component} from 'react';
import Top from '../templates/top'

import requestGet from '../../requestGet';
import siteUrl from '../organisms/siteUrl'

export default class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      reason: ''
    }
  }

  async componentDidMount(){
    const siteData = await requestGet(process.env.REACT_APP_DARKSOUL3_DATA_URL)
    this.setState(siteData.data)
  }

  render () {
    return (
      <>
        {siteUrl()}
        <Top data={this.state}/>
      </>
    )
  }
}