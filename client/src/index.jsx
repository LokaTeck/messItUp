import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const user = 'Logan';

ReactDOM.render(<App user={user} />, document.getElementById('app'));
