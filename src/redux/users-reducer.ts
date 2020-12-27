import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";
const FAKE = "FAKE"

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
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<any>,
    fake: 10
}

type InitialStateType = typeof initialState
//type ActionsTypes = InferActionsTypes<typeof actions>


const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case FAKE:
            return {...state, fake: state.fake + 1}

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

}
type ActionsType = FollowActionType | UnfollowActionType
    | SetUsersActionType | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType | ToggleFollowingProgress
    | FakeType

type FakeType = {
    type: typeof FAKE,
    fake: number
}

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersPropType>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followSuccess = (userId: number): FollowActionType => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersPropType>): SetUsersActionType => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

const followUnfollow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollow(dispatch, userId, apiMethod, actionCreator)

        // dispatch(toggleFollowingProgress(true, userId));
        // let response = await apiMethod(userId)
        //         if (response.data.resultCode == 0) {
        //             dispatch(actionCreator(userId))
        //         }
        //         dispatch(toggleFollowingProgress(false, userId));
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)

        // dispatch(toggleFollowingProgress(true, userId));
        // let response = await apiMethod(userId)
        //         if (response.data.resultCode == 0) {
        //             dispatch(actionCreator(userId))
        //         }
        //         dispatch(toggleFollowingProgress(false, userId));
    }
}

export default usersReducer;