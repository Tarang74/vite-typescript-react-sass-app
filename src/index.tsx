import React from 'react';
import ReactDOM from 'react-dom';

import App from '@components/App';

import '@assets/styles/index.scss';

let p = new Promise((resolve) => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('main-root')
    );
    resolve(true);
});

function main() {}

p.then(main);
