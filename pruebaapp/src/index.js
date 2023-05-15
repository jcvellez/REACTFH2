import React from 'react'
import ReactDOM from 'react-dom/client';
import { AppOne } from './AppOne';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppOne valor = { 10 }/>);