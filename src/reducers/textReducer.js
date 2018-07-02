import constants from '../constants'

let initialState = {
    text:"Original Display Text"
}

export default (state = initialState, action) => {
    let newState = Object.assign({}, state)

    switch (action.type) {
        case constants.FETCH_TEXT:
            newState['text'] = action.payload
            return newState
        default:
            return state
    }
}