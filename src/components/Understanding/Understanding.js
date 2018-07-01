import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_UNDERSTANDING', payload: this.state.feeling };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>Do you feel you're understanding the content?</h3>                
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.understanding } />
                    <div>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/3" >
                            Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default Understanding;