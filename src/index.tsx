import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let h1 = document.createElement("h1");
h1.innerHTML = 'Hello';
//@ts-ignore
document.querySelector('body')
    .appendChild(h1);

React.createElement('h1', [React.createElement(App)])

// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


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
