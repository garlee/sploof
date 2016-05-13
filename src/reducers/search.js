import * as actionTypes from '../actions/actions.js';


const DEFAULT_STATE = {
  searching: false,
  results: []
}

export const targetSong = (state = 'default', action) => {
  switch(action.type) {
    case actionTypes.GET_QUERY:
      return action.query
    default:
      return state
  }
}

export const defaultData = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case actionTypes.GET_DATA_SUCCESS:
      case actionTypes.GET_DATA_FAILURE:
      case actionTypes.GET_QUERY:
        return Object.assign({}, state, {
          [action.query]: getData(state, action)
        })
      default:
        return state
  }
}

export const getData = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
      case actionTypes.GET_QUERY:
        return Object.assign({}, state, {
          searching: true
      })

      case actionTypes.GET_DATA_SUCCESS:
        return Object.assign({}, state, {
          searching: false,
          results: action.results,
          receivedAt: action.receivedAt
      })

      case actionTypes.GET_DATA_FAILURE:
        return Object.assign({}, state, {
          searching: false,
          results: [
          ...state, event(undefined, action)
          ]
       })
    default: return state
  }
}


