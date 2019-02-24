import React, { Component } from 'react';
import {Todo} from '../components/index';
import {connect} from 'react-redux';
import {getTodos} from '../redux/action'

class App extends Component {

    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                {
                    this.props.todos.map((item)=>{
                        return(<Todo key={item.id} title={item.title}/>)
                    })
                }
                </ul>
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


export default connect(mapStateToProps,mapDispatchToProps)(App);
