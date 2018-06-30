import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Supported extends Component {
    
    constructor() {
        super();
        this.state = {
            feedbackList: {
                support: 0
            }
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feedbackList: { support: event.target.value }
            });
        }
    
        this.handleSubmit = () => {
            this.props.feedback.push( this.state.feedbackList.support );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>Do you feel supported by faculty and peers?</h3>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.support } />
                <Router>
                    <div>
                        <Route path="/4" component={ Comments }/>
                        <button onClick={ () => this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/4" >
                            Next</Link>
                        </button>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Supported;