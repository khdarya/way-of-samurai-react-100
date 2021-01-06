import React from 'react';
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';
import {AppStateType} from "../../redux/redux-store";
import LoginReduxForm, {LoginFormDataType} from "./LoginForm";



const Login: React.FC<MapStateToPropsType &  MapDispatchToPropsType> = (props) => {

    const onSubmit = (formData: LoginFormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

        <div>
            <p><b>For Testing:</b></p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        </div>
    </div>
}

type MapStateToPropsType = { isAuth: boolean, captchaUrl: string | null}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean,captcha:string) => void
    logout: () => void
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {login, logout})(Login);