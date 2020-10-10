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
    users: [] as Array<UsersPropType>,
    pageSize: 88,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<any>
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
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
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
    toggleIsFetchingAC: (isFetching: boolean) => ({type: "TOGGLE-IS-FETCHING", isFetching} as const),
    toggleFollowingProgressAC: (isFetching: boolean, userId: number) => ({type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const)

}

export default usersReducer;