import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
//import state from './redux/state';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType} from './redux/state';


export type AppType = {
    appState: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (updatedPostText: string) => void
}


/*
export type AppType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
*/

const App = (props: AppType) => {

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <Dialogs

                       /*dialogs={props.appState.dialogsPage.dialogs}
                        messages={props.appState.dialogsPage.messages}*/

                        dialogsPage={props.appState.dialogsPage}/>}/>

                    <Route path='/profile' render={() => <Profile
                        profilePage={props.appState.profilePage}
                        addPost = {props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                        {/*posts={props.appState.profilePage.posts}/>}/>*/}

                </div>
            </div>

    );
}

export default App;
