import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Supported from '../Supported/Supported';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Understanding extends Component {
    
    handleChange( event ) {
        this.setState({
          feedbackList: { understanding: event.target.value }
        });
    }

    render() {
        return (    
            <div>
                <input onChange={ () => this.handleChange }
                value={ this.props.feedbackList.understanding } />
                <Router>
                    <div>
                        <Route path="/3" component={ Supported }/>
                        <Link to="/3" />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Understanding;