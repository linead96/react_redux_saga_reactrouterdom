import React from 'react';
import './Todo.css'

const Todo = ({title,clicked}) => <li onClick={clicked}>{title}</li>

export default Todo;