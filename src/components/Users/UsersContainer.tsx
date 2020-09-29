import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/users-reducer";
import {UsersPropType} from "../../redux/users-reducer";
import Users from "./Users";


type MapStateType = {
    users: Array<UsersPropType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchType = {
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapDispatchType & MapStateType

export const UsersContainer = (props: PropsType) => {
    const {users, followUsers, unfollowUsers, setUsers, totalUsersCount, pageSize, currentPage, setCurrentPage, setTotalUsersCount} = props
    return (
        <Users

            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}

            users={users}

            followUsers={followUsers}
            unfollowUsers={unfollowUsers}
            setUsers={setUsers}

            setCurrentPage={setCurrentPage}

            setTotalUsersCount={setTotalUsersCount}
        />
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    followUsers: actions.followActionCreator,
    unfollowUsers: actions.unfollowActionCreator,
    setUsers: actions.setUsersAC,
    setCurrentPage: actions.setCurrentPageAC,
    setTotalUsersCount: actions.setTotalUsersCountAC
})(UsersContainer)