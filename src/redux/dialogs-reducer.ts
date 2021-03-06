import {InferActionsTypes} from "./redux-store";

export type DialogsPropType = {
    id: number
    name: string
}

export type MessagesPropType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogsPropType>,
    messages: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'How is your IT'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessagesPropType>,
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: new Date().getTime(),
                message: action.text
            };
            return {...state,
                messages: [newMessage, ...state.messages]}
        }

        default:
            return state;
    }

    return state;
}

export const actions = {
    sendMessageActionCreator: (text: string) => ({type: 'SEND-MESSAGE', text} as const),
   // updateNewMessageBodyActionCreator: (newMessageText: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', newMessageText} as const)
}

export default dialogsReducer;