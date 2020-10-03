import {InferActionsTypes} from "./redux-store";


let initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const actions = {
    setAuthUserDataAC: (id: number, email: string, login: string) => ({
        type: 'SET-AUTH-USER-DATA', data: {
            id, email, login
        }
    } as const)
}

export default authReducer;