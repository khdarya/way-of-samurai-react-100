// import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
// import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
//
// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// export type DialogsType = {
//     id: number
//     name: string
// }
// export type MessagesType = {
//     id: number
//     message: string
// }
// export type ProfilePageType = {
//     newPostText: string
//     posts: Array<PostsType>
// }
// export type DialogsPageType = {
//     newMessageText: string
//     dialogs: Array<DialogsType>
//     messages: Array<MessagesType>
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
// export type SidebarPageType = {
//
// }
//
// export type StoreType = {
//     _state: RootStateType
//     _rerenderEntireTree: () => void
//     subscribe: (observer: any) => void
//     //addPost: () => void
//     //updateNewPostText: (newText: string) => void
//     //addMessage: () => void
//     //updateNewMessageText: (newMessageText: string) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
//
// /*type AddPostActionType = {
//     type: 'ADD-POST'
//     newPostText: string
// }*/
//
// /*type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }*/
//
// /*type AddPostActionType = ReturnType<typeof addPostActionCreator>
// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>*/
//
// //export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
//
//
// export type ActionsTypes = ReturnType<typeof addPostActionCreator>
//     | ReturnType<typeof updateNewPostTextActionCreator>
//     | ReturnType<typeof sendMessageCreator>
//     | ReturnType<typeof updateNewMessageBodyCreator>
//
//
// /*export const addPostActionCreator = (newPostText: string)/!*: AddPostActionType*!/ => {
//     return {
//         type: 'ADD-POST',
//         newPostText: newPostText
//     } as const
// }
//
// export const updateNewPostTextActionCreator = (newText: string)/!*: UpdateNewPostTextActionType*!/ => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: newText
//     } as const
// }*/
//
// /*export const sendMessageCreator = (newMessageText: string) => {
//     return {
//         type: 'SEND-MESSAGE',
//         newMessageText: newMessageText
//     } as const
// }
//
// export const updateNewMessageBodyCreator = (newMessageText: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         newMessageText: newMessageText
//     } as const
// }*/
//
//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: 1, message: 'Hi how are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my first post', likesCount: 10},
//                 {id: 3, message: 'Bla', likesCount: 11},
//                 {id: 4, message: 'Dada', likesCount: 14}
//             ]
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             messages: [
//                 {id: 1, message: 'Hi, how are you?'},
//                 {id: 2, message: 'How is your IT'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ],
//             newMessageText: '',
//         },
//       // sidebar: {newSidebar: ''}
//     },
//     _rerenderEntireTree() {
//         console.log('State changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer/*: () => void*/) {
//         this._rerenderEntireTree = observer;
//     },
//
//     /*    addPost(/!*postText: string*!/) {
//             const newPost: PostsType = {
//                 id: new Date().getTime(),
//                 message: this._state.profilePage.newPostText,
//                 likesCount: 0
//             };
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = '';
//             this._rerenderEntireTree();
//         },
//         updateNewPostText(newText: string) {
//             this._state.profilePage.newPostText = newText;
//             this._rerenderEntireTree();
//         },*/
//
//     /*    addMessage() {
//             const newMessage: MessagesType = {
//                 id: new Date().getTime(),
//                 message: this._state.dialogsPage.newMessageText
//             };
//             this._state.dialogsPage.messages.push(newMessage);
//             this._state.dialogsPage.newMessageText = '';
//             this._rerenderEntireTree();
//         },*/
//     /*  updateNewMessageText(newMessageText: string) {
//           this._state.dialogsPage.newMessageText = newMessageText;
//           this._rerenderEntireTree();
//       },*/
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//
//         this._rerenderEntireTree();
//
// /*        if (action.type === 'ADD-POST') {
//             const newPost: PostsType = {
//                 id: new Date().getTime(),
//                 message: action.newPostText, /!*this._state.profilePage.newPostText,*!/
//                 likesCount: 0
//             };
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = '';
//             this._rerenderEntireTree();
//         } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//             debugger
//             this._state.profilePage.newPostText = action.newText;
//             this._rerenderEntireTree();
//         } else if (action.type === 'SEND-MESSAGE') {
//             const newMessage: MessagesType = {
//                 id: new Date().getTime(),
//                 message: action.newMessageText,
//             };
//             this._state.dialogsPage.messages.push(newMessage);
//             this._state.dialogsPage.newMessageText = '';
//             this._rerenderEntireTree();
//         } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
//             this._state.dialogsPage.newMessageText = action.newMessageText;
//             this._rerenderEntireTree();
//         }*/
//     }
//
// }
//
// export default store;
