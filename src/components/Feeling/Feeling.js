import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Understanding from '../Understanding/Understanding';

class Feeling extends Component {
    constructor() {
        super();
        this.state = {
            feedbackList: {
                feeling: 0
            }
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feedbackList: { feeling: event.target.value }
            });
        }
    
        this.handleSubmit = () => {
            this.props.feedback.push( this.state.feedbackList.feeling );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>How are you feeling?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.feeling } />
                <Router>
                    <div>
                        {/* <Route exact path="/2" component={ Understanding }/> */}
                        <Link to="/2" >
                        <button onClick={ this.handleSubmit }>
                            
                            Next
                        </button>
                        </Link>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Feeling;