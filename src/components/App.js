import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContatiner';
import AppTemplate from './AppTemplate';


class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
      />
    );
  }
}

export default App;
