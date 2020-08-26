import {InferActionsTypes} from "./redux-store";

let initialState = {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi, how are you?'},
            {id: 2, message: 'How is your IT'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        newMessageText: '',
    }

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {


        // case SEND_MESSAGE:
        //     let newMessage: MessagesType = {
        //         id: new Date().getTime(),
        //         message: action.newMessageText,
        //     };
        //     state.messages.push(newMessage);
        //     state.newMessageText = '';
        //     return state;
        // case UPDATE_NEW_MESSAGE_BODY:
        //     state.newMessageText = action.newMessageText;
        //     return state;

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

const actions = {

}

// export const sendMessageCreator = (newMessageText: string) => {
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
// }

export default dialogsReducer;