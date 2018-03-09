import {
  ADOPT_CAT,
  ADOPT_DOG,
} from './../actions.js';

const initialState = {
  loading: true,
  error: null,
  dogToAdopt: {
    imageURL: '',
    imageDescription: '',
    name: '',
    sex: '',
    age: '',
    breed: '',
    story: '',
  },
  catToAdopt: {
    imageURL: '',
    imageDescription: '',
    name: '',
    sex: '',
    age: '',
    breed: '',
    story: '',
  },
};

const reducer = (state = initialState, action) => {
  if(action.type === ADOPT_DOG) {
    console.log('adopt dog');
  }
  if (action.type === ADOPT_CAT) {
    console.log('adopt cat');
  } 
  return state;  
};

export default reducer;
