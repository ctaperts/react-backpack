import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
const App = require('./app/App').default;

ReactDOM.hydrate((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

if(process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./app/App', () => {
    const NewApp = require('./app/App').default;
    ReactDOM.hydrate((
      <BrowserRouter>
        <NewApp />
      </BrowserRouter>
    ), document.getElementById('root'));
  });
}
