import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/common.css';
import '../../assets/index.css';

const routingUrls = () => {
  return (
    <article style={{display:'flex', flexDirection: 'column'}}>
      <Link to="/">BloodBorne</Link>
      <Link to="/DarkSoul_3">DarkSoul_3</Link>
    </article>
  )
}

export default routingUrls