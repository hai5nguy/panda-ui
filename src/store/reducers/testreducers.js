// import update from 'react-addons-update'
// import Immutable from 'immutable'

const test = (state = "default", action) => {
	switch (action.type) {
		case 'CHANGE_TEST':
			debugger
			return action.value
		default:
			return state
	}
}

export default test
