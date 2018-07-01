import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Feeling extends Component {
    
    constructor() {
        super();
        this.state = {
            feedbackList: {
                comments: ''
            }
        }
    }

    render() {

        this.handleChange = ( event ) => {
            this.setState({
              feedbackList: { comments: event.target.value }
            });
        }
    
        this.handleSubmit = () => {
            console.log( this.props.feedback );
        }

        return (    
            <div>
                <h3>Thank you for your feedback!</h3>
                <div>
                    <button>
                        <Link to="/" >
                            Back to the Beginning?
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Feeling;