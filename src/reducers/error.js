import {
  LOOKUP_SYMBOL_ERROR,
} from '../constants';

const initialState = "";

export default function portfolio(state = initialState, action) {
  switch (action.type) {
    case LOOKUP_SYMBOL_ERROR:
      return action.payload;
    default:
      return state;
  }
}
