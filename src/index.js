import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorProvider } from './components/contexts/ErrorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ErrorProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorProvider>
);

