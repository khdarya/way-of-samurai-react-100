import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


type MDTPType = {
    initializeApp: () => void
}
type MSTPType = {
    initialized: boolean
}

class App extends React.Component<MSTPType & MDTPType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App) as React.ComponentClass;
