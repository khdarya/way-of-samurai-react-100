import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/profile' render={() => <Profile/>}/>

                    <Route path='/users' render={ () => <Users />} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
