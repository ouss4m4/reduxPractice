import { combineReducers } from 'redux'

export const Github = combineReducers({
    User,
    Repos
})
function User (state={isFetching : false, fetched: false, user : null}, action) {
    switch(action.type) {
        case 'REQUEST_USER':
            return {
                ...state,
                isFetching : true,
                fetched : false
            }
        case 'RECEIVE_USER':
            return {
                isFetching : false,
                fetched: true,
                user : action.payload
            }
        default :
            return state
    }
}

function Repos (state={isFetching : false, fetched: false, repos : null}, action) {
    switch(action.type){
        case 'REQUEST_REPOS':
            return {
                ...state,
                isFetching : true,
                fetched : false
            }
        case 'RECEIVE_REPOS':
            return {
                isFetching : false,
                fetched: true,
                repos : action.payload
            }
        default:
            return state;
    }
}