import {InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userId: null as (number | null)
}

type InitialStateType = typeof initialState
//type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: SetAuthUserData): InitialStateType => {
    switch (action.type) {

        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload

            }
        default:
            return state;
    }
}

type SetAuthUserData = {
    type: typeof SET_AUTH_USER_DATA
    payload: any
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserData => ({
    type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}
} as const)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
       let response =  await authAPI.me();
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }

}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
     let response = await authAPI.login(email, password, rememberMe);
                if (response.data.resultCode === 0) {
                   dispatch(getAuthUserData())
                } else {
                   let message = response.data.messages.length > 0
                       ? response.data.messages[0]
                       : "Some error";
                    dispatch(stopSubmit("login", {_error: message}));
                }
}

export const logout = () => (dispatch: Dispatch<any>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

//type ActionType = ReturnType<typeof setAuthUserData>

export default authReducer;