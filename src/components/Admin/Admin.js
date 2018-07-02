import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminList from '../AdminList/AdminList';

const mapStateToProps = ( reduxState ) => ({
    // reduxState
    feeling: reduxState.feelingReducer,
    // understanding: reduxState.understandingReducer,
    // support: reduxState.supportReducer,
    // comments: reduxState.commentsReducer
})

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            // feedback: [{
            //     feeling: 0,
            //     understanding: 0,
            //     support: 0,
            //     comments: ''
            // }]
            feedback: []
        }
    }

    getFeedback = () => {
        axios.get( '/feedback' )
        .then( ( response ) => {
            console.log( 'back from get call for feedback', response.data );
            // this.setState( { feedback: [ ...{feeling: response.data.feeling,
            //     understanding: response.data.understanding, 
            // support: response.data.support, comments: response.data.commments } ] });
            this.setState( { feedback: [ ...response.data ]})
            console.log( 'state:', this.state );
            
        })
        .catch( ( error ) => {
            console.log( 'Error occurred getting feedback', error )
        })
    }

    deleteFeedback = ( id ) => {
        axios.delete( `/feedback/${id}` )
        .then( ( response ) => {
            // let id = response.data.id;
            this.getFeedback();
        })
        .catch( ( error ) => {
            console.log( 'Error occurred deleting feedback', error );
        })
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.feedback.map( ( feedback ) => {
                        return  <AdminList key={ feedback.id } feedback={ feedback }
                        delete={ this.deleteFeedback }/>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect( mapStateToProps )( Admin );