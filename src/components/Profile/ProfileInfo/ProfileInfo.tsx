import React from "react";
import s from './ProfileInfo.module.css';
import {ProfilePropType} from "../../../redux/profile-reducer";
import photo from "../../../assets/images/user.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

type ProfileInfoType = {
    profile: ProfilePropType | null
}

const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://www.pbs.org/wgbh/nova/media/images/sting-ray-city-grand-cayman-1.width-800.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                {/*         <img src={props.profile.photos.large !== null ? props.profile.photos.large
                        : photo}/>*/}
                <ProfileStatus status={"Hello my friends"}/>
            </div>

        </div>

    )

}
export default ProfileInfo;