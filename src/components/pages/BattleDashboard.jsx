import React, {Component} from 'react';
import Top from '../templates/top'

import siteUrl from '../organisms/siteUrl'
import requestGet from '../../logic/requestGet';

export default class BloodBorne extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      reason: ''
    }
  }

  async componentDidMount(){
    const url = `${process.env.REACT_APP_BATTLE_URL}?name=${this.props.match.params.name}`
    const siteData = await requestGet(url)
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