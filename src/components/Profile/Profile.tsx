import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: ProfilePropType | null
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;