const requestSources = (selection) => ({
        type: 'REQUEST_SOURCES',
        selection
    })

const receiveSources = (data) => ({
        type: 'RECEIVE_SOURCES',
        data
    })

export function fetchSources(selection) {
    return dispatch => {
        dispatch(requestSources(selection))
        return fetch(`https://newsapi.org/v1/sources?language=${selection.lang}&category=${selection.category}`)
            .then(res => res.json())
            .then(data => dispatch(receiveSources(data)))
            .catch(err => console.log(err))
    }
}
const requestArticles = (source) => ({
    type: 'REQUEST_ARTICLES',
    source
})

const receiveArticles = (data) => ({
    type: 'RECEIVE_ARTICLES',
    data
})

const apiKey = '107c09980c274d48b24fa1d8184a2cee'
export function fetchArticles(Source){
    return dispatch => {
        dispatch(requestArticles(Source))
        return fetch(`https://newsapi.org/v1/articles?source=${Source}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => dispatch(receiveArticles(data)))
        .catch(err => console.log(err))
    }
}