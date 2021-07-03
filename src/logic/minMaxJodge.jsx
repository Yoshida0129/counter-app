/**
	data :[{
		playerName: 'Kento',
		count: 0,
		time: '00:00:00',
		funScore: 0,
		reason: 'hoge',
	}, {
		playerName: 'Kento',
		count: 0,
		time: '00:00:00',
		funScore: 0,
		reason: 'hoge',
	}],
	size: {
		max: {
			playerName: '',
			time: '',
			funScore: ''
		},
		min: {
			playerName: '',
			time: '',
			funScore: ''
		}
	}
 */
export const minMaxParams = ({data}, which) => {
	return {
		count: minMaxJudgeCount(data, which),
		time: minMaxJudgeForTimes(data, which),
		funScore: minMaxJudgeFunScore(data, which)
	}
}

const minMaxJudgeCount = (datas, which) => {
	const params = datas.reduce((accumulator, data) => [data.count, ...accumulator], [])
	switch (which){
	case 'max':
		return params.reduce((accumulator, currentValue) => accumulator < currentValue ? currentValue : accumulator, 0 )
	case 'min':
		return params.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator, 0 )
	default:
		return null
	}
}

const minMaxJudgeFunScore = (datas, which) => {
	const params = datas.reduce((accumulator, data) => [data.funScore, ...accumulator], [])
	switch (which){
	case 'max':
		return params.reduce((accumulator, currentValue) => accumulator < currentValue ? currentValue : accumulator, 0 )
	case 'min':
		return params.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator, 0 )
	default:
		return null
	}
}
const minMaxJudgeForTimes = (datas, which) => {
	const params = datas.reduce((accumulator, data) => [data.time, ...accumulator], [])
	switch (which){
	case 'max':
		return params.reduce((accumulator, currentValue) => accumulator < currentValue ? currentValue : accumulator, '00:00:00' )
	case 'min':
		return params.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator, '00:00:00' )
	default:
		return null
	}
}