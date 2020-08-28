import React from 'react';
import Dialogs from "./Dialogs";
import {MessagesPropType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";

type MapStateType = {
    newMessageText: string
    messages: Array<MessagesPropType>
}
type MapDispatchType = {
    sendMessage: (message: string) => void
    updateNewMessageBody: (newMessageText: string) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapDispatchType & MapStateType

export const DialogsContainer = (props: PropsType) => {

    const {messages, newMessageText, sendMessage, updateNewMessageBody} = props

    return (
        <Dialogs
            messages={messages}
            newMessageText={newMessageText}
            sendMessage={sendMessage}
            updateNewMessageBody={updateNewMessageBody}
        />
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages
    }
}

export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    sendMessage: actions.sendMessageActionCreator,
    updateNewMessageBody: actions.updateNewMessageBodyActionCreator
})(DialogsContainer)