import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Thanks from '../Thanks/Thanks';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Feeling extends Component {
    
    handleChange( event ) {
        this.setState({
          feedbackList: { comments: event.target.value }
        });
    }

    handleSubmit( event ) {
        event.preventDefault();
        this.props.feedbackList.feeling
    }

    render() {
        return (    
            <div>
                <input onChange={ () => this.handleChange }
                value={ this.props.feedbackList.feeling } />
                <Router>
                    <div>
                        <Route path="/5" component={ Thanks }/>
                        <Link to="/5" />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Feeling;