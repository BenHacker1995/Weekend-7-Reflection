import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feedbackReducer = ( state = [], action ) => {
    if( action.type === 'ADD_FEEDBACK' ) {
        console.log( 'In feedbackReducer' );
        // return [ ...state, action.payload ]
    }
    return state;
}

const storeInstance = createStore(

    feedbackReducer

);

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
