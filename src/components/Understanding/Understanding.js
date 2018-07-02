import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Understanding extends Component {
    
    constructor() {
        super();
        this.state = {
            understanding: 0
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
                understanding: event.target.value
            });
        }
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_UNDERSTANDING', payload: this.state.understanding };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>Do you feel you're understanding the content?</h3>                
                <input type="number" onChange={ this.handleChange }
                value={ this.state.understanding } />
                    <div>
                        <button onClick={ this.handleSubmit }>
                            <Link to="/3" >
                            Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Understanding );