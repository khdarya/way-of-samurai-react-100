import {InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'

export type ProfilePropType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        website: string
    }
    photos: {
        small: string
        large: string
    }
}

export type PostsPropType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 10},
        {id: 3, message: 'Bla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 14}
    ] as Array<PostsPropType>,
    profile: null as null | ProfilePropType,
    status: ""
}

type InitialStateType = typeof initialState
//type ActionsTypes = InferActionsTypes<typeof actions>


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: new Date().getTime(),
                message: action.message,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

    return state;
}
type ActionsType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType | SetUserProfileACType | SetStatusActionType

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    message: string
}
type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfilePropType
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const addPost = (message: string): AddPostActionCreatorType => ({type: ADD_POST, message} as const)
export const updateNewPostText = (newText: string): UpdateNewPostTextActionCreatorType => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const setUserProfile = (profile: ProfilePropType): SetUserProfileACType => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status} as const)


export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}
export default profileReducer;