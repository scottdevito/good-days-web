import * as SignalR from '@aspnet/signalr';

const logger = store => next => action => {
  console.error('***dispatching***', action);
  let result = next(action);
  console.error('***next state***', store.getState());
  return result;
};

// const connection = new SignalR.HubConnectionBuilder()
//   .withUrl('http://localhost:44334/signalr')
//   .configureLogging(SignalR.LogLevel.Information)
//   .build();

// connection.start().catch(err => console.error(err.toString()));

export function signalRMiddleware(store: any) {
  return (next: any) => (action: any) => {
    // switch (action.type) {
    //   case 'SIGNALR':
    //     console.error('yo');
    //     connection.invoke('Send').catch(err => console.error(err.toString()));
    //     break;
    //   default: {
    //   }
    // }

    return next(action);
  };
}

export { logger };
