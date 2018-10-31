import {
  SOME_API_RETURN_SUCCESS,
  SOME_API_RETURN_FAIL,
} from '../actions/types.A';

export default function(state = [], action) {
  switch (action.type) {
    case SOME_API_RETURN_SUCCESS:
      return Object.assign(...state, action.payload);
    case SOME_API_RETURN_FAIL:
      return state;
    default:
      return state;
  }
}
