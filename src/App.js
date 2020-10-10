import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home';
import MyProvider from './context/MyProvider';


class App extends Component {
  render() {
    return (
    <MyProvider>
      <Switch key="routes">
        <Route exact path="/" component={Home} />
      </Switch>
    </MyProvider>
    );
  }
}

export default App;
