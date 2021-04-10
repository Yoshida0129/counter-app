import React, {Component} from 'react';
import Top from '../templates/top'

import '../../assets/common.css';
import '../../assets/index.css';
import siteUrl from '../organisms/siteUrl'
import requestGet from '../../requestGet';

export default class BloodBorne extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      reason: ''
    }
  }

  async componentDidMount(){
    const siteData = await requestGet(process.env.REACT_APP_BLOODBORNE_DATA_URL)
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