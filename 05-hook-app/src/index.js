import React from 'react';
import ReactDOM from 'react-dom/client';
import HookApp from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import CounterWithcustomHook from './components/01-useState/CounterWithcustomHook';
import SimpleForm from './components/02-useEffect/SimpleForm';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealExampleRef from './components/04-useRef/RealExampleRef';
import Layout from './components/05-useLayoutEffect/LayoutEffect';
import Memorize from './components/06-memos/Memorize';
import MemoHook from './components/06-memos/MemoHook';
import { CallBackHook } from './components/06-memos/CallBackHook';
import { Padre } from './components/07-tarea-memo/Padre';
import ToDoApp from './components/08-useReducer/ToDoApp';
import MainApp from './components/09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <MainApp /> );


//import './components/08-useReducer/intro-reducer';