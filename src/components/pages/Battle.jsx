import React, {Component} from 'react';
import BattleTop from '../templates/battleTop'

import { minMaxParams } from '../../logic/minMaxJodge';
import requestGet from '../../logic/requestGet';

export default class Battle extends Component {
  constructor(){
    super()
    this.state = {
			data :[],
			size: {
				max: {
					count: 0,
					time: '',
					funScore: 0
				},
				min: {
					count: 0,
					time: '',
					funScore: 0
				}
			}
		}
  }

  async componentDidMount(){
    const url = `${process.env.REACT_APP_BATTLE_URL}?name=all`
    const siteData = await requestGet(url)
		this.setState ({
			data: siteData.data,
			size: {
				max: minMaxParams(this.state, 'max'),
				min: minMaxParams(this.state, 'min')
			}
		})
  }

  render () {
		const {data, size} = this.state
    return (
			<BattleTop data={data} size={size}/>
    )
  }
}