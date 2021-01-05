import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/user.png";
import ProfileDataReduxForm from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";

type ProfileInfoType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
}

const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false);

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

    const onSubmit = (formData: UserProfileType) => {
        props.saveProfile(formData).then(() => setEditMode(false))
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || usersPhoto} className={s.mainPhoto}
                />
                {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                    : <ProfileData toEditMode={toEditMode}
                                   profile={props.profile}
                                   isOwner={props.isOwner}
                    />}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    )
}


export default ProfileInfo;