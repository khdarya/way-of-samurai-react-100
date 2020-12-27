import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/user.png";

type ProfileInfoType = {
    profile: UserProfileType  | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const photoFile = e.target.files;
        if (photoFile && photoFile.length) {
            props.savePhoto(photoFile[0])
        }
    }

    const toEditMode = () => setEditMode(true)

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://www.pbs.org/wgbh/nova/media/images/sting-ray-city-grand-cayman-1.width-800.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                {/*<img src={props.profile.photos.large ? props.profile.photos.large :photo }/>*/}
                <img src={props.profile.photos.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>

        </div>

    )

}
export default ProfileInfo;