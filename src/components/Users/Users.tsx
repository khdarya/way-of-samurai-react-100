import React from 'react';
import {UsersPropType} from "../../redux/users-reducer";
import styles from './Users.module.css';

export type UsersPropsType = {
    users: Array<UsersPropType>
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<UsersPropType>) => void
}

let Users = (props: UsersPropsType) => {
    const {users, followUsers, unfollowUsers, setUsers} = props;
//49:
    if (users.length === 0) {
        setUsers (
            [{
                id: 1,
                avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-128.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    avatar: 'https://www.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }]
        )
    }

    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatar} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    unfollowUsers(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    followUsers(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;