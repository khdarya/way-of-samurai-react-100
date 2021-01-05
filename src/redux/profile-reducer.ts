import {v1} from 'uuid';
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const UPDATE_PHOTO = 'UPDATE_PHOTO'


export type UserProfilePhotosType = {
    small: string
    large: string
}

export type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserProfilePhotosType
}

export type PostsPropType = {
    id: string
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: v1(), message: 'Hi how are you?', likesCount: 12},
        {id: v1(), message: 'It\'s my first post', likesCount: 10},
        {id: v1(), message: 'Bla', likesCount: 11},
        {id: v1(), message: 'Dada', likesCount: 14}
    ] as Array<PostsPropType>,
    profile: null as UserProfileType | null,
    status: ""
}

export type InitialStateType = typeof initialState
//type ActionsTypes = InferActionsTypes<typeof actions>


const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.message,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }

        case SET_STATUS: {
            return {...state, status: action.status}
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        // case DELETE_POST: {
        //     return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        // }
        case UPDATE_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} as UserProfileType}
        }
        default:
            return state;
    }

    return state;
}
type ActionsType = AddPostActionCreatorType | SetUserProfileACType | SetStatusActionType | UpdatePhotoType

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    message: string
}

type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: UserProfileType
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
// type DeletePostStatus = {
//     type: typeof DELETE_POST
//     postId: number
// }
type UpdatePhotoType = {
    type: typeof UPDATE_PHOTO
    photos: UserProfilePhotosType
}

export const addPost = (message: string): AddPostActionCreatorType => ({type: ADD_POST, message} as const)
export const setUserProfile = (profile: UserProfileType): SetUserProfileACType => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status} as const)
// export const deletePost = (postId: number): any => ({type: DELETE_POST, postId} as const)
export const updatePhotoAC = (photos: UserProfilePhotosType) => ({ type: UPDATE_PHOTO, photos } as const)


type thunkType = ThunkAction<void, AppStateType, unknown, ActionsType | FormAction>

export const getUserProfile = (userId: number | null): thunkType => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId: number | null) => {
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
export const updatePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updatePhoto(file)
    if (response.resultCode === 0) {
        dispatch(updatePhotoAC(response.data.photos))
    }
}

export const saveProfileTC = (profile: UserProfileType): thunkType =>
    async (dispatch, getState) => {
        let userId = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile)
        if (response.resultCode === 0) {
            if(userId !== null){
                dispatch(getUserProfile(userId))
            } else {
                throw new Error("userId can't be null")
            }
        } else {
            dispatch(stopSubmit('edit-profile', {_error: response.messages[0] }))
            return Promise.reject(response.messages[0])
        }
    }

export default profileReducer;
