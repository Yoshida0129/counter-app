import React from 'react'
import { Link } from 'react-router-dom'

const routingUrls = () => {
  return (
    <article style={{display:'flex', flexDirection: 'column'}}>
      <Link to="/blood_borne">BloodBorne</Link>
      <Link to="/darkSoul_3">DarkSoul_3</Link>
      <Link to="/">Battle</Link>
      <Link to="/dashboard/hyo">Hyo</Link>
    </article>
  )
}

export default routingUrls