import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feedbackReducer = ( state = [], action ) => {
    if( action.type === 'ADD_FEELING' ) {
        state.push( action.payload );
        console.log( state );
    }
    else if( action.type === 'ADD_UNDERSTANDING' ) {
        state.push( action.payload );
        console.log( state );
    }
    else if( action.type === 'ADD_SUPPORT' ) {
        state.push( action.payload );
        console.log( state );
    }
    else if( action.type === 'ADD_COMMENTS' ) {
        state.push( action.payload );
        console.log( state );
        return state;
    }
    return state;
}

const storeInstance = createStore(

    feedbackReducer

);

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
