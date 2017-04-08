export function Translate (state={isFetching : false, fetched: false}, action) {
    switch(action.type) {
        case 'REQUEST_TRANSLATE':
            return {
                ...state, isFetching: true, fetched: false
            }
        case 'RECEIVE_TRANSLATE':
            return {
                ...state, isFetching: false, fetched: true, translate : action.translation
            }
        default:
            return state
    }
}