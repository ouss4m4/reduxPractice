function requestUser(user) {
    return {
        type : 'REQUEST_USER',
        user,
    }
}

function receiveUser(payload) {
    return {
        type: 'RECEIVE_USER',
        payload
    }
}

export function fetchUser (user) {
    return dispatch => {
        dispatch(requestUser(user))
        return fetch(`https://api.github.com/users/${user}`)
                .then( res => res.json())
                .then ( payload => dispatch(receiveUser(payload)))
                .catch (err => console.log(err))
    }
}