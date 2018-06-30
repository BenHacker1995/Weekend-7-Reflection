import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Comments from '../Comments/Comments';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Supported extends Component {
    
    handleChange( event ) {
        this.setState({
          feedbackList: { support: event.target.value }
        });
    }

    render() {
        return (    
            <div>
                <input onChange={ () => this.handleChange }
                value={ this.props.feedbackList.support } />
                <Router>
                    <div>
                        <Route path="/4" component={ Comments }/>
                        <Link to="/4" />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Supported;