import React from 'react'
import PropTypes from 'prop-types'
import useForm from '../../hooks/useForm';

const ToDoAdd = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

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
       
        handleAddToDo(newToDo);
        reset();

    }

    return (
        <>
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
        </>
    )
}

// ToDoAdd.propTypes = {

// }

export default ToDoAdd
