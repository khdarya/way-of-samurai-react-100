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

    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

    totalUsersCount: number
    pageSize: number
    currentPage: number

}

class Users extends React.Component<UsersPropsType, any> {

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);       //55
        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }


        return <div>
                <div>
                    {pages.map ( p => {
                      return  <span className={this.props.currentPage === p ? styles.selectedPage: " "}
                      onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
                    })}

                </div>
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
    }

}

export default Users;