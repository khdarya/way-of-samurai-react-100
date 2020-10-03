import {InferActionsTypes} from "./redux-store";


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
    profile: null as null | ProfilePropType
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>


const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch(action.type) {

        case 'ADD-POST': {
            let newPost = {
                id: new Date().getTime(),
                message: action.message,
                likesCount: 0
            };
            return {...state,
                newPostText: '',
                posts: [newPost, ...state.posts]}
        }
        case 'UPDATE-NEW-POST-TEXT': {
           return {...state, newPostText: action.newText}
        }

/*        case ADD_POST:
            let newPost = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;*/

        case 'SET-USER-PROFILE': {
                return {...state, profile: action.profile}
            }
        default:
            return state;
    }

    return state;
}

export const actions = {
    addPostActionCreator: (message: string) => ({type: 'ADD-POST', message} as const),
    updateNewPostTextActionCreator: (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText} as const),
    setUserProfileAC: (profile: ProfilePropType) => ({type: 'SET-USER-PROFILE', profile} as const)

}

/*export const addPostActionCreator = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string)=> {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}*/

export default profileReducer;