import {InferActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

let initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false
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

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserData => ({
    type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}
} as const)

// export const actions = {
//     setAuthUserDataAC: (id: number, email: string, login: string) => ({
//         type: SET_AUTH_USER_DATA, data: {
//             id, email, login
//         }
//     } as const)
// }

export const getAuthUserData = () => {
    return (dispatch: Dispatch) =>
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                   dispatch(getAuthUserData())
                }
            });
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