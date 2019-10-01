import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('src/App').App;
        ReactDOM.render(<NextApp />, document.getElementById('root'));
    });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
