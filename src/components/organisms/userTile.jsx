import React from 'react'

import DeathCountRow from '../molecules/deathCountRow'
import GameTimes from '../molecules/gameTimes'
import FunScore from '../molecules/funScore'
import AppText from '../atoms/appText'

const userTile = ({data, size}) => {
	const {min, max} = size
	return (
		<article>
			<AppText content={data.playerName} size={24}/>
			<GameTimes time={data.time} min={min.time} max={max.time}/>
			<DeathCountRow count={data.count} min={min.count} max={max.count}/>
			<FunScore score={data.funScore} min={min.funScore} max={max.funScore}/>
		</article>
	)
}

export default userTile