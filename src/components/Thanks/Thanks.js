import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Thanks from '../Thanks/Thanks';



class Feeling extends Component {
    
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
            // this.props.feedback.push( this.state.feedbackList.comments );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>Any other comments?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.support } />
                    <div>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/" >
                            Back to the Beginning?</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default Feeling;