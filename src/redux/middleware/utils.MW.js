import * as signalR from '@aspnet/signalr';
import {
  SEND_WEBSOCKET_MESSAGE,
  SOCKET_MESSAGE_RECEIVED,
} from '../actions/types.A';

const logger = store => next => action => {
  console.error('***dispatching***', action);
  let result = next(action);
  console.error('***next state***', store.getState());
  return result;
};

const createMySocketMiddleware = storeAPI => {
  let connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:44316/exampleHub/')
    .build();

  connection.start().catch(function(err) {
    return console.error(err.toString());
  });

  connection.on('ReceiveMessage', message => {
    console.error('Received message: ', message);
    storeAPI.dispatch({
      type: SOCKET_MESSAGE_RECEIVED,
      payload: message,
    });
  });

  return next => action => {
    if (action.type == SEND_WEBSOCKET_MESSAGE) {
      connection
        .invoke('SendMessage', action.payload, action.payload)
        .catch(function(err) {
          return console.error(err.toString());
        });
      return;
    }
    return next(action);
  };
};

export { logger, createMySocketMiddleware };
