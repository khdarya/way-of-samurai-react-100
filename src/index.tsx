import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, {RootStateType} from './redux/state';
/*import {addPost} from "./redux/state";*/
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (_state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                appState={store.getState()}
                dispatch={store.dispatch.bind(store)}

                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                //addMessage={store.addMessage.bind(store)}
                //updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


/*    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
/>
        </BrowserRouter>, document.getElementById('root'));
}*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
