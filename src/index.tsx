// Default
import React from 'react';
import ReactDOM from 'react-dom';

// State management
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Application and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

