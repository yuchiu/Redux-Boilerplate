import constants from '../constants'

let actions = {
    fetchText: (text) => {
        return (dispatch) => {
                dispatch({
                    type: constants.FETCH_TEXT,
                    payload: text
                })
        }
    }
}

export default actions;