import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import '../08-useReducer/style.css';
import { todoReducer } from './todoReducer';
import useForm from '../../hooks/useForm';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); //aqui pongo los "todos" por que si los todos cambian entonces graba en el Local Storage

    //ELIMINAR un ToDo
    const handleDelete = (todoId) => {
        
        //todoId.preventDefault();        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
        //console.log('Este es el id para borrar ',todoId);
    }

    const handleToggle= (todoId)=>{

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);
    }

    //AGREGAR un ToDo
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch(action);
        reset();
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
                                    <p className={`${ todo.done && 'complete'}`} onClick={()=>handleToggle(todo.id)}> {i + 1}. {todo.desc} </p>
                                    <button  onClick={()=>handleDelete(todo.id)} className='btn btn-danger'>
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
                        <input type='text'
                            name='description'
                            className='form-control'
                            placeholder='Aprender algo ...'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={description}
                        ></input>
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