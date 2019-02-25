import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import {Home, About} from './containers/index';
import {store} from './redux/store';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className = 'App'>
            <Route exact path='/' component={Home} />
            <Route exact path='/todos' component={Home} />
            <Route path ='/todos/:id' component={About} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
