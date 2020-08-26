import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/profile' render={() => <Profile/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
