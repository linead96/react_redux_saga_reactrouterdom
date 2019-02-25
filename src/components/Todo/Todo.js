import React from 'react';
import './Todo.css'

const Todo = ({title,clicked,completed}) => <li className={completed?'complete':'incomplete'} onClick={clicked}>{title}</li>

export default Todo;