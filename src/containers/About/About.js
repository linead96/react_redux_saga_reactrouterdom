import React from 'react';
import {connect} from 'react-redux';
import backButton from '../../assets/imgs/backbutton.png';
import './About.css';


const About = (props) => {

    
    const backButtonHandler = () => {
        props.history.push(`/todos`)
    }

    if(props.todos.length === 0){
       backButtonHandler();
    }

    const { params } = props.match
    const {id,userId,title,completed}  = props.todos[params.id-1]
    

    return(
        <div>
            <div id="back-button-container">
                <img onClick={backButtonHandler} id='back-button' src={backButton} alt="back-button"/>
            </div>
            <div id='about-section-container'> 
                <div id='about-content-container'>
                    <p>Title: <span>{title}</span></p>
                    <p>ID: <span>{id}</span></p>
                    <p>User-ID: <span>{userId}</span></p>
                    <p>Status: <span>{completed?`completed`:`incomplete`}</span></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(About);