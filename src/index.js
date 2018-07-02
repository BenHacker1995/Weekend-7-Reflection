import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


const feelingReducer = ( state = [], action ) => {
    if( action.type === 'ADD_FEELING' ) {
        state.feeling = action.payload;
        console.log( 'feeling', state );
        return state;
    }
    // if( action.type === 'ADD_UNDERSTANDING' ) {
    //     state.understanding = action.payload;
    //     console.log( 'understanding', state );
    //     return state;
    // }
    // if( action.type === 'ADD_SUPPORT' ) {
    //     state.support = action.payload;
    //     console.log( 'support', state );
    //     return state;
    // }
    // if( action.type === 'ADD_COMMENTS' ) {
    //     state.comments = action.payload;
    //     console.log( 'comments', state );
    //     return state;
    // }
    return state;
}

const understandingReducer = ( state = [], action ) => {
    if( action.type === 'ADD_UNDERSTANDING' ) {
        state = action.payload;
        console.log( 'understanding', state );
        return state;
    }
    return state;
}

const supportReducer = ( state = [], action ) => {
    if( action.type === 'ADD_SUPPORT' ) {
        state = action.payload;
        console.log( 'support', state );
        return state;
    }
    return state;
}

const commentsReducer = ( state = [], action ) => {
    if( action.type === 'ADD_COMMENTS' ) {
        state = action.payload;
        console.log( 'comments', state );
        return state;
    }
    return state;
}

const storeInstance = createStore(

    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    })

);

ReactDOM.render(<Provider store={ storeInstance }><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
