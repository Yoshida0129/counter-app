import React from 'react'

import '../../assets/index.css';

const style = {
  fontSize: 32
}

const deathCount = (count) => {
  return (
    <section>
      <h1>現在のdeath数</h1>
      <p style={style}>
        {count}
      </p>
    </section>
  )
}

export default deathCount