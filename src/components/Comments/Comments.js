import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';

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
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_COMMENTS', payload: this.state.comments };
            this.props.dispatch( action );
            axios.post( this.props.reduxState )
        }

        return (    
            <div>
                <h3>Any other comments?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.support } />
                    <div>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/5" >
                            Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Comments );