import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: UserProfileType  | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void

}


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>

        </div>
    )
}
export default Profile;