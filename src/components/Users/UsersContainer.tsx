import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/users-reducer";
import {UsersPropType} from "../../redux/users-reducer";
//import Users from "./UsersAPIComponent";
//import UsersAPIComponent from "./UsersAPIComponent";
import axios from "axios";
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


export type UsersPropsType = {
    users: Array<UsersPropType>
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<UsersPropType>) => void

    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

    totalUsersCount: number
    pageSize: number
    currentPage: number
}

class UsersContainer extends React.Component<UsersPropsType, any> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        // if (this.props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      followUsers={this.props.followUsers}
                      unfollowUsers={this.props.unfollowUsers}
        />
    }
}


// export const UsersContainer = (props: PropsType) => {
//     const {users, followUsers, unfollowUsers, setUsers, totalUsersCount, pageSize, currentPage, setCurrentPage, setTotalUsersCount} = props
//     return (
//         <Users
//
//             totalUsersCount={totalUsersCount}
//             pageSize={pageSize}
//             currentPage={currentPage}
//
//             users={users}
//
//             followUsers={followUsers}
//             unfollowUsers={unfollowUsers}
//             setUsers={setUsers}
//
//             setCurrentPage={setCurrentPage}
//
//             setTotalUsersCount={setTotalUsersCount}
//         />
//     )
// }

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