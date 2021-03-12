import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './rootReducer';

//const preloadedState = localStorage.reduxState ? JSON.parse(localStorage.reduxState) : null;

export const store = createStore(
  reducer,
  //preloadedState,
  composeWithDevTools(applyMiddleware()),
);

//store.subscribe(() => localStorage.reduxState = JSON.stringify(store.getState()));
