export function Text (state={isFetching : false, fetched: false}, action) {
    switch(action.type) {
        case 'REQUEST_TEXT':
            return {
                ...state, isFetching : true, fetched: false
            }
        case 'RECEIVE_TEXT':
            return {
                ...state, isFetching : false, fetched : true, text : action.text
            }
        default :
            return state
    }
}