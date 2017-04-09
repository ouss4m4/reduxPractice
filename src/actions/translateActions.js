function requestTranslation(text) {
    return {
        type: 'REQUEST_TRANSLATE',
        text
    }
}

function receiveTranslation(json) {
  return {
    type: 'RECEIVE_TRANSLATE',
    translation: json
  }
}
const url = "https://translate.yandex.net/api/v1.5/tr.json/translate?" 
const key = "trnsl.1.1.20170402T090258Z.215110f80c2b26c7.d08f3c7ae721a2c82a0182efc1fa18577160edac"

export function fetchTranslation(selection) {
  return dispatch => {
    dispatch(requestTranslation(selection))
    const { language, text } = selection;
    return fetch(`${url}key=${key}&lang=en-${language}&text=${text}`)
      .then(response => response.json())
      .then(json => dispatch(receiveTranslation(json)))
      .catch( (err) => console.log(err))
  }
}
