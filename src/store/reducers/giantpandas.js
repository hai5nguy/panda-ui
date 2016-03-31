// import update from 'react-addons-update'
// import Immutable from 'immutable'

const giantpandas = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PANDA':
			var stateCopy = state.slice(0)
			stateCopy.push(action.pandaToInsert)
			return stateCopy
		default:
			return state
	}
}

export default giantpandas
