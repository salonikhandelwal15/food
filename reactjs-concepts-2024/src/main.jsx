//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import React from 'react';

//import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
//import Firstcomponent from './components/Firstcomponent.jsx'
//import Firstcomponent from './component/Firstcomponent';
import GlobalState from './context/index.jsx';


createRoot(document.getElementById('root')).render(
  <GlobalState> 
    <App />
    </GlobalState>
);

