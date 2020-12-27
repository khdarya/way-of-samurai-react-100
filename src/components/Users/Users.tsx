import React from 'react';
import styles from "./Users.module.css";
import usersPhoto from "../../assets/images/user.png";
import {UsersPropType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/Paginator/Paginator";


export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersPropType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingInProgress: Array<any>

}

let Users = (props: UsersType) => {

    const {pageSize, totalUsersCount, currentPage, onPageChanged} = props;

    return <div>
        <div>

            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       pageSize={pageSize} totalUsersCount={totalUsersCount} portionSize={5}
            />

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                                 </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {props.unfollow(u.id)}}>
                                    Unfollow</button>

                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)}}>
                                    Follow</button>
                            }
                                </div>
                                </span>
                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                                </span>
            </div>)
        }
    </div>
}

export default Users;