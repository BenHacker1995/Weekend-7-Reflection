import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Feeling extends Component {
    constructor() {
        super();
        this.state = {
            feeling: 0
        }
        }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feeling: event.target.value
            });
        }
    
        this.handleSubmit = ( event ) => {
            event.preventDefault();
            const action =
            { type: 'ADD_FEELING', payload: this.state.feeling };
            this.props.dispatch( action );
        }

        return (    
            <div>
                <h3>How are you feeling?</h3>
                <input type="number" onChange={  this.handleChange }
                value={ this.state.feeling } />
                    <div>                        
                        <button onClick={ this.handleSubmit }> 
                        <Link to="/2" >Next</Link>
                        </button>
                    </div>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Feeling );