import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            // this.props.feedback.push( this.state.feedbackList.feeling );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>How are you feeling?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.feeling } />
                    <div>                        
                        <button onClick={ this.handleSubmit }> 
                        <Link to="/2" >Next</Link>
                        </button>
    
                    </div>
            </div>
        )
    }
}

export default Feeling;