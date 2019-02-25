import React, { Component } from 'react';
import {Todo} from '../../components/index';
import {connect} from 'react-redux';
import {getTodos} from '../../redux/action';
import './Home.css';

class Home extends Component {

    componentDidMount() {
        if(this.props.todos.length === 0){
            this.props.onGetTodos();
        }
        this.props.history.push(`/todos`)
    }

    handleOnClicks = (id) => {
        this.props.history.push(`/todos/${id}`)
    }

    render() {

        return (
            <div>
                <h1>TODO.IO</h1>
                <div id="home-container">
                    <h2>Todo Lists</h2>
                    <ul>
                    {
                        this.props.todos.map((item)=>{
                            return(<Todo 
                                key={item.id} 
                                title={item.title} 
                                completed={item.completed}
                                clicked={this.handleOnClicks.bind(this,item.id)}/>)
                        })
                    }
                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTodos: () => dispatch(getTodos()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
