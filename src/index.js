import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.js';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);