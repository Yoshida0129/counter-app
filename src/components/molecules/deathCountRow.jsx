import React from 'react'
import { minMaxColorPicker } from '../../logic/colorPicker'

const deathCountRow = ({count, min, max}) => {
  return (
    <p>
			deaths
      <strong style={{color: minMaxColorPicker(count, min, max)}}>{count}</strong>
    </p>
  )
}

export default deathCountRow