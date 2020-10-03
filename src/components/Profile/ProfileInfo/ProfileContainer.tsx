import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {actions, ProfilePropType} from "../../../redux/profile-reducer";


type MapStateType = {
    profile: ProfilePropType | null
}

type MapDispatchType = {
    setUserProfile: (profile: ProfilePropType) => void
}

export type PropsType = MapDispatchType & MapStateType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    setUserProfile: actions.setUserProfileAC
})(ProfileContainer);