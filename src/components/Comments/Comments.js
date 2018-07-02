import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Comments extends Component {
    
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
                comments: event.target.value
            });
        }
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_COMMENTS', payload: this.state.comments };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>Any other comments?</h3>
                <input type="text" onChange={ this.handleChange }
                value={ this.state.comments } />
                    <div>
                        <button onClick={ this.handleSubmit }>
                            <Link to="/5" >
                            Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Comments );