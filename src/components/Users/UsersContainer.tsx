import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/users-reducer";
import {UsersPropType} from "../../redux/users-reducer";
import Users from "./Users";


type MapStateType = {
    users: Array<UsersPropType>
}

type MapDispatchType = {
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<any>) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapDispatchType & MapStateType

export const UsersContainer = (props: PropsType) => {
    const {users, followUsers, unfollowUsers, setUsers} = props
    return (
        <Users
            users={users}
            followUsers={followUsers}
            unfollowUsers={unfollowUsers}
            setUsers={setUsers}
        />
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}

export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    followUsers: actions.followActionCreator,
    unfollowUsers: actions.unfollowActionCreator,
    setUsers: actions.setUsersAC
})(UsersContainer)