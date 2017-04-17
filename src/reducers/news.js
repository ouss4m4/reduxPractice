import { combineReducers } from 'redux';

export const news = combineReducers({
    Channels,
    Topics
});

function Channels(state={isFetching : false, fetched: false, data : null}, action) {
    switch(action.type){
        case 'REQUEST_SOURCES':
            return {...state, isFetching:true, fetched: false}
        case 'RECEIVE_SOURCES':
            return {...state, isFetching:false, fetched:true, data: action.data}
        default:
            return state
    }
}

function Topics(state={isFetching: false, fetched: false, data: null}, action) {
    switch(action.type){
        case 'REQUEST_ARTICLES':
            return {...state, isFetching: true,fetched: false}
        case 'RECEIVE_ARTICLES':
            return {...state, isFetching: false, fetched: true, data: action.data}
        default:
            return state
    }
}   