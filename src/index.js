import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <ToastContainer position="bottom-right" autoClose={3000} />
    </>
    
  
);


//rafc para crear componentes en jsx