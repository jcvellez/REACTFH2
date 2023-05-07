import React from 'react'
import ReactDOM from 'react-dom';
import { AppOne } from './AppOne';
import './index.css'


let divRoot = document.querySelector('#root'); //referencia

ReactDOM.render(<AppOne valor = { 10 }/>,divRoot);