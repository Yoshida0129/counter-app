import React from 'react'
import { minMaxColorPicker } from '../../logic/colorPicker'

const funScore = ({score, min, max}) => {
  return (
    <p>
			fun Score
      <strong style={{color: minMaxColorPicker(score, min, max)}}>{score}</strong>
    </p>
  )
}

export default funScore