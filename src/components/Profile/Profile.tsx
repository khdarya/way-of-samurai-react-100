import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: ProfilePropType | null
    status: string
    updateStatus: (status: string) => void
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;