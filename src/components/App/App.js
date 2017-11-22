import React, {PureComponent} from 'react';
import Budget from './../Budget';
import Market from './../Market';
import Farm from './../Farm';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Market />
          <Farm />
        </div>
        <Budget />
      </div>
    );
  }
}

export default App;
