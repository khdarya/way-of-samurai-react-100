import {InferActionsTypes} from "./redux-store";


export type UsersPropType = {
    id: number
    avatar: string
    followed: boolean
    name: string
    status: string
    location: locationType
    photos: {
        small: string
        large: string
    }
}
type locationType = {
    city: string
    country: string
}

let initialState = {
    users: [
        // {
        //     id: 1, avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-128.png',
        //     followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2, avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png',
        //     followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3, avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png',
        //     followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ] as Array<UsersPropType>,
    pageSize: 88,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
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
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

    return state;
}

export const actions = {
    followActionCreator: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowActionCreator: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsersAC: (users: Array<UsersPropType>) => ({type: 'SET-USERS', users} as const),
    setCurrentPageAC: (currentPage: number) => ({type: "SET-CURRENT-PAGE", currentPage} as const),
    setTotalUsersCountAC: (totalUsersCount: number) => ({type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount } as const),
    toggleIsFetchingAC: (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const)

}

export default usersReducer;