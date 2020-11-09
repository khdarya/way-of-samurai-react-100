import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsPropType, MessagesPropType} from "../../redux/dialogs-reducer";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


export type DialogsPropsType = {
    messages: Array<MessagesPropType>
 //   newMessageText: string
    sendMessage: (message: string) => void
 //   updateNewMessageBody: (newMessageText: string) => void

    dialogs: Array<DialogsPropType>
}

type MessageFormDataType = {
    newMessageText: string
}
const Dialogs = (props: DialogsPropsType) => {

    const {messages,  sendMessage,  dialogs} = props

    const addMessage = messages.map(m => {
        return <Message key={m.id} message={m.message} />
    })

    // const addMessageHandler = () => {
    //     sendMessage(newMessageText)
    // }
    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     updateNewMessageBody(e.currentTarget.value)
    // }

    let addNewMessage = (values: MessageFormDataType) => {
        sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
             dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id}/>)
                }
            </div>
            <div className={s.messages}>
                <div>{addMessage}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
        </div>

    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<MessageFormDataType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   validate={[required, maxLength50]}
                   name="newMessageText" placeholder='Enter your message'/>
        </div>
        <div><button>Add message</button></div>
    </form>
)
}

const AddMessageFormRedux = reduxForm<MessageFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;