import React from 'react'

import '../../assets/index.css';

const deathCount = (count) => {
  return (
    <>
      <h1>現在のdeath count</h1>
      <p className='count-font'>
        {count}
      </p>
    </>
  )
}

export default deathCount