import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import style from './Profile.module.css'


export type ProfilePropsType = {
    profile: UserProfileType  | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profi: UserProfileType) => Promise<any>
}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;