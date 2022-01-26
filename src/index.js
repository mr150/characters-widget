import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'storeon/react';
import './index.css';
import App from './app';
import store from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<StoreContext.Provider value={store}>
			<App />
		</StoreContext.Provider>
	</React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
