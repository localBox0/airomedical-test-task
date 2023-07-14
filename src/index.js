import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <div style={{ background: '#DADADA', minHeight: '100vh' }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </div>,
    document.getElementById('root')
);

reportWebVitals();

