import React from 'react'
import { minMaxColorPicker } from '../../logic/colorPicker'

const gameTimes = ({time, min, max}) => {
	return (
		<p style={{color: minMaxColorPicker(time, min, max)}}>{time}</p>
	)
}

export default gameTimes