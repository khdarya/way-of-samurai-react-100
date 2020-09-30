import React from 'react';
import styles from "./Users.module.css";
import usersPhoto from "../../assets/images/user.png";
import {UsersPropType} from "../../redux/users-reducer";


export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersPropType>
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
}

let Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : " "}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowUsers(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followUsers(u.id)
                                }}>Follow</button>
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