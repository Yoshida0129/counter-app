import React from 'react'
import loading from './loading'

import siteUrl from '../organisms/siteUrl'
import UserTile from '../organisms/userTile'

const style = {
	display: 'flex',
	flexDirection: 'column'
}

const battleTop = ({data, size}) => {
	if (!data || !size) return loading()
	return (
		<div style={style}>
			{siteUrl()}
			{data.map((d, i) => {
				return <UserTile data={d} size={size} key={i}/>
			})}
		</div>
	)
}

export default battleTop