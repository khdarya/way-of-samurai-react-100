import React from 'react';
import {UsersPropType} from "../../redux/users-reducer";
import styles from './Users.module.css';
import axios from "axios";
import usersPhoto from '../../assets/images/user.png'

export type UsersPropsType = {
    users: Array<UsersPropType>
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    setUsers: (users: Array<UsersPropType>) => void
}

class Users extends React.Component<UsersPropsType, any> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        // if (this.props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

// getUsers = () =>
// {
//
// }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}> Get Users</button>*/}
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : usersPhoto } className={styles.userPhoto} />
                            {/*<img src={usersPhoto} className={styles.userPhoto}/>*/}
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollowUsers(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.followUsers(u.id)
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
        )
    }

}

export default Users;