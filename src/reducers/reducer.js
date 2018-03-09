import {
  FETCH_DOG_REQUEST,
  FETCH_CAT_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_CAT_SUCCESS,
  FETCH_ERROR,
} from './../actions.js';

const initialState = {
  loading: true,
  error: null,
  dogToBeAdopted: '',
  catToBeAdopted: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCH_DOG_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case FETCH_CAT_REQUEST:
    return {
      ...state,
      loading: true,
      error: null,
    };
  case FETCH_DOG_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      dogToBeAdopted: action.animal,
    };
  case FETCH_CAT_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      catToBeAdopted: action.animal,
    };    
  case FETCH_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return state;
  }
};

export default reducer;
