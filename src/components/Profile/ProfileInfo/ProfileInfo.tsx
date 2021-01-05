import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import {contactsType, UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/user.png";

type ProfileInfoType = {
    profile: UserProfileType | null
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
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || usersPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}

                <div>Full Name: {props.profile.fullName}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? "no" : "yes"}</div>
                {props.profile.lookingForAJob &&
                <div>My professional skills: {props.profile.lookingForAJobDescription}</div>
                }
                <div>About me: {props.profile.aboutMe}</div>
                {/*<div>Contacts: {Object*/}
                {/*    .keys (props.profile.contacts)*/}
                {/*    .map((k) => {*/}
                {/*        return <Contact key={k}*/}
                {/*                 contactTitle={k}*/}
                {/*                 contactValue={props.profile.contacts[k as keyof contactsType]}/>*/}
                {/*    })}*/}
                {/*</div>*/}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact = (props: ContactType) => {
    return <div>{props.contactTitle} : {props.contactValue}</div>
}

export default ProfileInfo;