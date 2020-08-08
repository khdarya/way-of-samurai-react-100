import {ActionsTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    switch(action.type) {
        case ADD_POST:
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
            return state;
        default:
            return state;
    }


/*
    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: action.newPostText, /!*this._state.profilePage.newPostText,*!/
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;

    }
*/


    return state;
}

export const addPostActionCreator = (newPostText: string)/*: AddPostActionType*/ => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const updateNewPostTextActionCreator = (newText: string)/*: UpdateNewPostTextActionType*/ => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;