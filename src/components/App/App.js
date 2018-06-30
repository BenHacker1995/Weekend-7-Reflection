import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   feedbackList: {
    //     feeling: 0,
    //     understanding: 0,
    //     support: 0,
    //     comments: ''
    //   },
    // };
  }

  render() {
    let feedback = [];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feeling feedback={ feedback }/>
      </div>
    );
  }
}

export default App;
