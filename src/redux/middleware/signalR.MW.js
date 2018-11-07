import * as signalR from '@aspnet/signalr';
import {
  SEND_WEBSOCKET_MESSAGE,
  SOCKET_MESSAGE_RECEIVED,
  SOCKET_NOTIFICATION_RECEIVED,
} from '../../constants/ActionTypes';

const createMySocketMiddleware = storeAPI => {
  // Start connection and register listeners - This only happens once on app startup.
  let connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:44316/exampleHub/')
    .build();

  connection.start().catch(function(err) {
    return console.error(err.toString());
  });

  connection.on('ReceiveMessage', message => {
    storeAPI.dispatch({
      type: SOCKET_MESSAGE_RECEIVED,
      payload: message,
    });
  });

  connection.on('ReceiveNotification', message => {
    storeAPI.dispatch({
      type: SOCKET_NOTIFICATION_RECEIVED,
      payload: message,
    });
  });

  // Set up Middleware that handles actions before they reach the reducer.
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

export { createMySocketMiddleware };
