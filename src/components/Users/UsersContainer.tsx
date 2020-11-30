import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers, follow, unfollow
} from "../../redux/users-reducer";
import {UsersPropType} from "../../redux/users-reducer";
//import Users from "./UsersAPIComponent";
//import UsersAPIComponent from "./UsersAPIComponent";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";


type MapStateType = {
    users: Array<UsersPropType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
   // setUsers: (users: Array<UsersPropType>) => void
    setCurrentPage: (pageNumber: number) => void
   // setTotalUsersCount: (totalUsersCount: number) => void
   // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapDispatchType & MapStateType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {

        console.log("Render")

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}


// const mapStateToProps = (state: AppStateType): MapStateType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStateType): MapStateType => {

    console.log('mapStateToProps USERS')

    return {
        //users: getUsersSuperSelector(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.ComponentType>(
  //  withAuthRedirect,
    connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)