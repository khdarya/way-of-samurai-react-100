import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {actions} from "../../redux/users-reducer";
import {UsersPropType} from "../../redux/users-reducer";
//import Users from "./UsersAPIComponent";
//import UsersAPIComponent from "./UsersAPIComponent";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.svg';
import Preloader from "../common/Preloader/Preloader";


type MapStateType = {
    users: Array<UsersPropType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchType = {
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<any>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type PropsType =  MapDispatchType & MapStateType

// export type UsersPropsType = {
//     users: Array<UsersPropType>
//     followUsers: (userId: number) => void
//     unfollowUsers: (userId: number) => void
//     setUsers: (users: Array<UsersPropType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     isFetching: boolean
//     toggleIsFetching: (isFetching: boolean) => void
// }

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
            });

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followUsers={this.props.followUsers}
                   unfollowUsers={this.props.unfollowUsers}
            />
        </>
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
//             users={users}
//             followUsers={followUsers}
//             unfollowUsers={unfollowUsers}
//             setUsers={setUsers}
//             setCurrentPage={setCurrentPage}
//             setTotalUsersCount={setTotalUsersCount}
//         />
//     )
// }


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    followUsers: actions.followActionCreator,
    unfollowUsers: actions.unfollowActionCreator,
    setUsers: actions.setUsersAC,
    setCurrentPage: actions.setCurrentPageAC,
    setTotalUsersCount: actions.setTotalUsersCountAC,
    toggleIsFetching: actions.toggleIsFetchingAC
})(UsersContainer)