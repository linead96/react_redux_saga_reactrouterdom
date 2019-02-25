import React from 'react';
import {connect} from 'react-redux';

const About = (props) => {
    const { params } = props.match
    const {id,userId,title,completed}  = props.todos[params.id]
    console.log(id, userId, title, completed)
    return(
        <div>
            <p>{id}</p>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{completed?`completed`:`incomplete`}</p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(About);