import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import theReducer from './reducers';
import {Provider} from 'react-redux'


const store = createStore(
  theReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // action -> describe what you want to do
// const increment = () => {
//   return {
//     type: "inc"
//   };
// }
// const decrement = () => {
//   return {
//     type: 'dec'
//   };
// }

// // reducer
// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'inc':
//       return state + 1;
//     case 'dec':
//       return state - 1;
//   }
// }

// // STORE -> all state information - globalized
// const store = createStore(reducer);

// // subxcribe
// store.subscribe(() => console.log(store.getState()));

// // dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();