import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

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
            this.props.feedback.push( this.state.feedbackList.feeling );
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <input onChange={ () => this.handleChange }
                value={ this.state.feedbackList.feeling } />
                <Router>
                    <div>
                        <Route path="/2" component={ Understanding }/>
                        <button onClick={ this.handleSubmit }
                        feedback={ this.props.feedback }>
                            <Link to="/2" >
                            Next</Link>
                        </button>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Feeling;