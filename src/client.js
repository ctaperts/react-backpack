import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const App = require('./app/App').default;

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');
  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}

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
