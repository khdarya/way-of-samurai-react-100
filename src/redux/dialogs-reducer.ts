import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }

    /*        if (action.type === 'SEND-MESSAGE') {
                const newMessage: MessagesType = {
                    id: new Date().getTime(),
                    message: action.newMessageText,
                };
                state.messages.push(newMessage);
                state.newMessageText = '';

            } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
                state.newMessageText = action.newMessageText;

            }*/


    return state;
}

export const sendMessageCreator = (newMessageText: string) => {
    return {
        type: 'SEND-MESSAGE',
        newMessageText: newMessageText
    } as const
}

export const updateNewMessageBodyCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageText: newMessageText
    } as const
}

export default dialogsReducer;