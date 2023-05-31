import React from 'react';
import ReactDOM from 'react-dom/client';
import HookApp from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import CounterWithcustomHook from './components/01-useState/CounterWithcustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <SimpleForm /> );
