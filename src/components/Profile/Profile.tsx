import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";
import {ProfilePageType} from "../../redux/state";



export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
}


const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}/>
        </div>
    )
}
export default Profile;