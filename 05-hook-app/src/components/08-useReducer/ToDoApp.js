import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import '../08-useReducer/style.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc:'Aprender React',
    done:false
}];

const ToDoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);

    return (
        <div>
            <h1>ToDoApp</h1>
            <hr></hr>
            <ul>
                <li>Hola</li>
                <li>A todos</li>
                <li>Hola de nuevo</li>
            </ul>
        </div>
    )
}

//ToDoApp.propTypes = {}

export default ToDoApp