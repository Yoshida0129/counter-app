import React from 'react'

import '../../assets/index.css';

const deathCount = (count) => {
  return (
    <section>
      <h1>現在のdeath数</h1>
      <p className='count-font'>
        {count}
      </p>
    </section>
  )
}

export default deathCount