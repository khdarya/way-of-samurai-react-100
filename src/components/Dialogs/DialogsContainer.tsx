import React from 'react';
import Dialogs from "./Dialogs";
import {DialogsPropType, MessagesPropType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";

type MapStateType = {
    newMessageText: string
    messages: Array<MessagesPropType>
    dialogs: Array<DialogsPropType>
}
type MapDispatchType = {
    sendMessage: (message: string) => void
    updateNewMessageBody: (newMessageText: string) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapDispatchType & MapStateType

export const DialogsContainer = (props: PropsType) => {

    const {messages, newMessageText, sendMessage, updateNewMessageBody, dialogs} = props

    return (
        <Dialogs
            messages={messages}
            newMessageText={newMessageText}
            sendMessage={sendMessage}
            updateNewMessageBody={updateNewMessageBody}

            dialogs={dialogs}
        />
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    sendMessage: actions.sendMessageActionCreator,
    updateNewMessageBody: actions.updateNewMessageBodyActionCreator
})(DialogsContainer)