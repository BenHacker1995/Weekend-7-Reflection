import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Supported extends Component {
    
    constructor() {
        super();
        this.state = {
            support: 0
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
                support: event.target.value
            });
        }
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_SUPPORT', payload: this.state.support };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>Do you feel supported by faculty and peers?</h3>
                <input type="number" onChange={ this.handleChange }
                value={ this.state.support } />
                    <div>
                        <button onClick={ this.handleSubmit }>
                            <Link to="/4" >
                            Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Supported );