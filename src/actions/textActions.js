function requestText(selection) {
    return {
        type: 'REQUEST_TEXT',
        selection
    }
}

function receiveText(json) {
  return {
    type: 'RECEIVE_TEXT',
    text: json.text_out
  }
}

export function fetchText(selection) {
  return dispatch => {
    dispatch(requestText(selection))
    const { format, elements } = selection;
    return fetch(`https://www.randomtext.me/api/gibberish/${format}-${elements}/20-40`)
      .then(response => response.json())
      .then(json => dispatch(receiveText(json)))
  }
}