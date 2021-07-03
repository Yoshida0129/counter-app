const BLACK = '#171717'
const RED = '#C71717'
const BLUE = '#1717C7'

export const minMaxColorPicker = (param, min, max) => {
	return param === max ? RED :
		param === min ? BLUE : BLACK
}