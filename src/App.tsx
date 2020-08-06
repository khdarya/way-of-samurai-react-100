import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {ActionsTypes, RootStateType, StoreType} from './redux/state';


export type AppType = {
    store: StoreType
    appState: RootStateType
    //addPost: (postText: string) => void
    //updateNewPostText: (updatedPostText: string) => void
    //addMessage: (messageText: string) => void
    //updateNewMessageText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}


const App: React.FC<AppType> = (props) => {

    debugger

//const state = props.store.getState();

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <Dialogs

                    dialogsPage={props.appState.dialogsPage}
                    //addMessage={props.store.addMessage.bind(props.store)}
                    newMessageText={props.appState.dialogsPage.newMessageText}
                    // updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                    dispatch={props.dispatch}
                />}/>

                <Route path='/profile' render={() => <Profile
                    profilePage={props.appState.profilePage}
                    dispatch={props.dispatch}

                    // addPost={props.store.addPost.bind(props.store)}
                    //updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
            </div>
        </div>

    );
}

export default App;
