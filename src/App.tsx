import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/users' render={() => <UsersContainer />} />

                    <Route path='/login' render={() => <Login />} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
