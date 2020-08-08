import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import {DialogsType, MessagesType} from "../../index";
import {
    ActionsTypes,
    DialogsPageType,
   /* sendMessageCreator,
    updateNewMessageBodyCreator,*/
} from "../../redux/state";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer"

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    // addMessage: (messageText: string) => void
    newMessageText: string
    // updateNewMessageText: (newMessageText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>);


    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(props.newMessageText))
        //props.addMessage(props.newMessageText);
    }

    const onMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(updateNewMessageBodyCreator(event.currentTarget.value))

        //props.updateNewMessageText(event.currentTarget.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}


            </div>


            <div><textarea placeholder='Enter your message' value={props.newMessageText}
                           onChange={onMessageChangeHandler}/></div>
            <div>
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>

    )
}
export default Dialogs;