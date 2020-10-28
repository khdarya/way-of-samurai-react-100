import React from 'react';
import Dialogs from "./Dialogs";
import {DialogsPropType, MessagesPropType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {actions} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateType = {
  //  newMessageText: string
    messages: Array<MessagesPropType>
    dialogs: Array<DialogsPropType>
}
type MapDispatchType = {
    sendMessage: (message: string) => void
  //  updateNewMessageBody: (newMessageText: string) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapDispatchType & MapStateType

export const DialogsContainer = (props: PropsType) => {

    const {messages, sendMessage,    dialogs} = props

    return (
        <Dialogs
            messages={messages}
            //newMessageText={newMessageText}
            sendMessage={sendMessage}
           // updateNewMessageBody={updateNewMessageBody}
            dialogs={dialogs}

        />
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {

        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
    }
}

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
        sendMessage: actions.sendMessageActionCreator

    }),
    withAuthRedirect
)(DialogsContainer)

// export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
//     sendMessage: actions.sendMessageActionCreator,
//     updateNewMessageBody: actions.updateNewMessageBodyActionCreator
// })(AuthRedirectComponent)