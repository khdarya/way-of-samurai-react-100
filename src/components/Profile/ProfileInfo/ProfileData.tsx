import {contactsType, UserProfileType} from "../../../redux/profile-reducer";
import React from "react";

type ProfileDataType = {
    profile: UserProfileType
    isOwner: boolean
    toEditMode: () => void
}

export const ProfileData  = (props: ProfileDataType) => {
    const {profile, isOwner, toEditMode} = props;
    return (
    <div>
        {isOwner && <div><button onClick={toEditMode}>edit</button></div>}
        <div><b>Full Name: </b>{profile.fullName}</div>
        <div><b>Looking for a job: </b>{profile.lookingForAJob ? "no" : "yes"}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
        }
        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>Contacts: </b>{Object.keys(profile.contacts).map((k) => {
            return <Contact key={k} contactTitle={k}
                            contactValue={props.profile.contacts[k as keyof contactsType]}/>
        })}
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
