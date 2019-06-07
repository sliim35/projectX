import * as rootReducers from '../store/reducers';

// Enable Webpack hot module replacement for reducers
export const enableHMRForReducers = (store) => {
  if (module.hot) {
    module.hot.accept('../store/reducers', () => {
      const nextRootReducer = rootReducers;
      store.replaceReducer(nextRootReducer);
    });
  }
};
