import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import '../08-useReducer/style.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDo = {
            id: new Date().getTime(),
            desc: 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id} className='list-group-item'
                                >
                                    <p className='text-center complete'> {i + 1}. {todo.desc} </p>
                                    <button className='btn btn-danger'>
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar ToDo</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='description' className='form-control' placeholder='Aprender algo ...' autoComplete='off' ></input>
                        <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

//ToDoApp.propTypes = {}

export default ToDoApp