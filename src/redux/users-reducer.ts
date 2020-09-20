import {InferActionsTypes} from "./redux-store";


export type UsersPropType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
type locationType = {
    city: string
    country: string
}

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
    ] as Array<UsersPropType>
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
               // users: [...state.users],
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return u;
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

    return state;
}

export const actions = {
    followActionCreator: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowActionCreator: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsersAC: (users: Array<any>) => ({type: 'SET-USERS', users} as const)

}

export default usersReducer;