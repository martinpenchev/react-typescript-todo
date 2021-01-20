import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './HomePage';
import NavigationBar from './Nav';
import AddItem from './AddItem';
import TodoList from './TodoList';

class App extends Component<{}, {}> {

  render() {
    return (
      <Router>
        <NavigationBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={TodoList} />
        <Route exact path="/new" component={AddItem} />
      </Router>
    );
  }
}

export default App;
