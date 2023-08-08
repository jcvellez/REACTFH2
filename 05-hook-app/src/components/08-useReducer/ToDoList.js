import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const ToDoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        todos.map((todo, i) => (
            //TodoListItem, todo, index, handleDelete, handleToggle
            <TodoListItem todo={todo} i={i} handleDelete={handleDelete} handleToggle={handleToggle} />
        ))
    )
}

// ToDoList.propTypes = {

// }

export default ToDoList
