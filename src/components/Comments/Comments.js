import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Thanks from '../Thanks/Thanks';

const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Comments extends Component {
    
    constructor() {
        super();
        this.state = {
            feedbackList: {
                comments: ''
            }
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feedbackList: { comments: event.target.value }
            });
        }
    
        this.handleSubmit = () => {
            this.props.feedback.push( this.state.feedbackList.comments );
            console.log( this.props.feedback );
            const action =
            { type: 'ADD_FEEDBACK', payload: this.props.feedback };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>Any other comments?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.support } />
                <Router>
                    <div>
                        <Route exact path="/5" component={ Thanks }/>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/5" >
                            Next</Link>
                        </button>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Comments );