import 'whatwg-fetch';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_QUERY = 'GET_QUERY';


export const getQuery = (query) => {
  return {
    type: GET_QUERY,
    query
  }
}

export const gatherData = (input) => {
  return (dispatch) => {
    dispatch(getQuery(input))

    return fetch('/songs/search', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({input: input}),
      credentials: 'same-origin'
    }).then(res => res.json())
    .then(json => dispatch(receiveData(input, json)))
    .catch(err => dispatch(errorHandler(err)))
  }
}

export const receiveData = (query, data) => {
  return {
    type: GET_DATA_SUCCESS,
    query: query,
    results: data
  }
}

export const errorHandler = (err) => {
  return {
    type: GET_DATA_FAILURE,
    err
  }
}