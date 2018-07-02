import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'

const mapStateToProps = ( reduxState ) => ({
    reduxState
})


class Thanks extends Component {

    render() {
    
        this.handleSubmit = () => {
            axios.post( '/feedback', this.props.reduxState )
            .then( ( response ) => {
                console.log( 'POST worked with', response );
            })
            .catch( ( error ) => {
                console.log( 'Error occurred:', error );
            })
        }

        return (    
            <div>
                <h3>Thank you for your feedback!</h3>
                <div>
                    <button onClick={ this.handleSubmit }>
                        <Link to="/" >
                            Back to the Beginning?
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Thanks );