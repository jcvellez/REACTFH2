import React from "react";
import ReactDOM from "react-dom";
import {PrimeraApp} from "./PrimeraApp";
import {CounterApp} from './CounterApp';
import './index.css'
 //codigo html

//console.log(saludo);

const divRoot= document.querySelector('#root'); //referencia
// PrimeraApp es la llamada al componente
//ReactDOM.render(<PrimeraApp mensaje = { 'En pruebas' }/>,divRoot); //( codig html , referencia )
ReactDOM.render(<CounterApp value = { 100 }/>,divRoot);

//mensaje = 'Hola este es mi mensaje'