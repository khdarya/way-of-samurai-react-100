let rerenderEntireTree = () => {
    console.log('State changed');
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    newMessageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
let state: RootStateType = {
    profilePage: {
        newPostText: "it-kamasutra.com",
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
            {id: 3, message: 'Bla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 14}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        newMessageText: "my message",
        messages: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'How is your IT'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    }
}

export let addPost = (/*postText: string*/) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export let addMessage = (/*messageText: string*/) => {
    const newMessage: MessagesType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree();
}

export let updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree();
}


export default state;