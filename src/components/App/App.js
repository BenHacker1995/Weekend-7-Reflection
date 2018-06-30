import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Thanks from '../Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route path="/1" component={ Feeling } />
            <Route path="/2" component={ Understanding } />
            <Route path="/3" component={ Supported } />
            <Route path="/4" component={ Comments } />
            <Route path="/5" component={ Thanks } />
              {/* <button feedback={ feedback }> */}
            <Link to="/1">Get Started!</Link>
              {/* </button> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
