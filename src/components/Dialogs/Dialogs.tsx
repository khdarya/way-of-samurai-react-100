import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsPropType, MessagesPropType} from "../../redux/dialogs-reducer";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';


export type DialogsPropsType = {
    messages: Array<MessagesPropType>
    newMessageText: string
    sendMessage: (message: string) => void
    updateNewMessageBody: (newMessageText: string) => void

    dialogs: Array<DialogsPropType>
   // isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    const {messages, newMessageText, sendMessage, updateNewMessageBody, dialogs} = props

    const addMessage = messages.map(m => {
        return <Message key={m.id} message={m.message} />
    })
    const addMessageHandler = () => {
        sendMessage(newMessageText)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.currentTarget.value)
    }

   // if(!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
             dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id}/>)
                }
            </div>
            <div className={s.messages}>
                {addMessage}

            </div>

            <div><textarea placeholder='Enter your message'
                           onChange={onChangeHandler}
                           value={newMessageText}
            /></div>
            <div>
                <button onClick={addMessageHandler}>Add message</button>
            </div>
        </div>

    )
}
export default Dialogs;