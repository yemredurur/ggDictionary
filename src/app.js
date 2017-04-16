import React, { Component } from 'react';
import { View }  from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Header, Button, Spinner} from './components/common';
import Router from './Router';
class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBOukFiy-RgXxi70hhw7a7rojrmXJMG914",
            authDomain: "manager-3f640.firebaseapp.com",
            databaseURL: "https://manager-3f640.firebaseio.com",
            storageBucket: "manager-3f640.appspot.com",
            messagingSenderId: "1072600089266"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App;