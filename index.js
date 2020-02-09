import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import STORE from './STORE'
import App from './practice-app'

ReactDOM.render(<App store={STORE} />,document.getElementById('root'));


