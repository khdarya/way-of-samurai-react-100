import {InferActionsTypes} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userId: null as (number | null),
    captchaUrl: null as string | null
}


type InitialStateType = typeof initialState
//type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}

type ActionTypes = SetAuthUserData | SetCaptchaUrlType;

type SetAuthUserData = {
    type: typeof SET_AUTH_USER_DATA
    payload: any
}
type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserData => ({
    type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}
} as const)

export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({
    type: SET_CAPTCHA_URL, captchaUrl
}as const)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
       let response =  await authAPI.me();
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }

}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
     let response = await authAPI.login(email, password, rememberMe, captcha);
                if (response.data.resultCode === 0) {
                   dispatch(getAuthUserData())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl())
                    }
                   let message = response.data.messages.length > 0
                       ? response.data.messages[0]
                       : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<any>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;