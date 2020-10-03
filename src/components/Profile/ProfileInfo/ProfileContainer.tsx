import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {actions, ProfilePropType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';


type MapStateType = {
    profile: ProfilePropType | null
}
type MapDispatchType = {
    setUserProfile: (profile: ProfilePropType) => void
}
type PathParamsType = {
    userId: any
}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    setUserProfile: actions.setUserProfileAC
})(WithUrlDataContainerComponent);