import API_URL from './config';

export const ADOPT_CAT = 'ADOPT_CAT';
export const ADOPT_DOG = 'ADOPT_DOG';
export const adoptAnimal = (species) => {
  if (species === 'dog'){
    return {
      type: ADOPT_DOG,
    };
  } else if (species === 'cat'){
    return {
      type: ADOPT_CAT,
    };
  }
};

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchAnimal = (species) => (dispatch) => {
  if (species === 'dog') {
    dispatch({
      type: FETCH_DOG_REQUEST,
    });
  } else if (species === 'cat') {
    dispatch({
      type: FETCH_CAT_REQUEST,
    });
  }
  return fetch(`${API_URL}/api/${species}`)
    .then((res) => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then((animal) => {
      if (species === 'dog') {
        dispatch({
          type: FETCH_DOG_SUCCESS,
          animal,
        });
      } else if (species === 'cat') {
        dispatch({
          type: FETCH_CAT_SUCCESS,
          animal,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ERROR,
        error,
      });
    });
};
