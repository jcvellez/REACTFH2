import React, { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import '../08-useReducer/style.css';
import { todoReducer } from './todoReducer';
import ToDoList from './ToDoList';
import ToDoAdd from './ToDoAdd';

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



    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(action);
    }

    const handleAddToDo = (newToDo) => {
        dispatch({
            type: 'add',
            payload: newToDo
        });
    }

    //AGREGAR un ToDo
    
    return (
        <div>
            <h1>ToDoApp ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className='col-7'>
                    {/* ToDoList, todos  handleDelete, handleToggle*/}
                    {
                        <ToDoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                    }
                </div>
                <div className='col-5'>
                    <ToDoAdd handleAddToDo={handleAddToDo}/>
                </div>
            </div>
        </div>
    )
}

//ToDoApp.propTypes = {}

export default ToDoApp