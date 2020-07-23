import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import {DialogsType, MessagesType} from "../../index";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>);



    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

                {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id}/>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
            </div>
            <div className={s.messages}>

                {messagesElements}

               {/* <Message message={messages[0].message}/>
                <Message message={messages[1].message}/>*/}
            </div>






            <div><textarea ref={newMessageElement}></textarea></div>
            <div><button onClick={addMessage}>Add message</button></div>
        </div>

    )
}
export default Dialogs;