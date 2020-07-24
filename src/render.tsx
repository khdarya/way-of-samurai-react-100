import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {RootStateType, updateNewPostText} from './redux/state';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
/>
        </BrowserRouter>, document.getElementById('root'));
}


