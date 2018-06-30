import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';


const mapStateToProps = ( reduxState ) => ({
    reduxState
})

class Feeling extends Component {
    
    handleChange( event ) {
        this.setState({
          feedbackList: { feeling: event.target.value }
        });
    }

    render() {
        return (    
            <div>
                <input onChange={ () => this.handleChange }
                value={ this.props.feedbackList.feeling } />
                <Router>
                    <div>
                        <Route path="/2" component={ Understanding }/>
                        <Link to="/2" />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Feeling;