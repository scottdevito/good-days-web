const logger = store => next => action => {
  console.error('***dispatching***', action);
  let result = next(action);
  console.error('***next state***', store.getState());
  return result;
};

export { logger };
