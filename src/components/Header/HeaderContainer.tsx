import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/auth-reducer";

type MapStateType = {
    login: string | null
    isAuth: boolean

}
type MapDispatchType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}
type PropsType = MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}/>
    }

}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    setAuthUserData: actions.setAuthUserDataAC
})(HeaderContainer);