
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: initializedType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type initializedType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedType => ({
    type: INITIALIZED_SUCCESS
} as const)


export const initializeApp = () => (dispatch: Dispatch<any>) => {
                let promise =  dispatch(getAuthUserData());
                promise.then(() => {
                    dispatch(initializedSuccess());
                })
}

export default appReducer;