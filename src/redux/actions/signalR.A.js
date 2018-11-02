const sendSocketMessage = message => {
  return dispatch => {
    dispatch({
      type: 'SEND_WEBSOCKET_MESSAGE',
      payload: message,
    });
  };
};

export { sendSocketMessage };
