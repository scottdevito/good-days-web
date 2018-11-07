import {
  SOCKET_MESSAGE_RECEIVED,
  SOCKET_NOTIFICATION_RECEIVED,
} from '../../constants/ActionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case SOCKET_MESSAGE_RECEIVED:
      return Object.assign({}, state, { message: action.payload });
    case SOCKET_NOTIFICATION_RECEIVED:
      return Object.assign({}, state, { notification: action.payload });
    default:
      return state;
  }
}
