import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Supported from '../Supported/Supported';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Understanding extends Component {
    
    constructor() {
        super();
        this.state = {
            feedbackList: {
                understanding: 0
            }
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feedbackList: { understanding: event.target.value }
            });
        }
    
        this.handleSubmit = () => {
            this.props.feedback.push( this.state.feedbackList.understanding );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>Do you feel you're understanding the content?</h3>                
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.understanding } />
                <Router>
                    <div>
                        <Route path="/3" component={ Supported }/>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/3" >
                            Next</Link>
                        </button>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Understanding;