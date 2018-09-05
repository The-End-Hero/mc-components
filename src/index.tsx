import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
    ,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
