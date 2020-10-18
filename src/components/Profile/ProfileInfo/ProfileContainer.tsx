import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import { getUserProfile, ProfilePropType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {usersAPI} from "../../../api/api";
import {Redirect} from "react-router-dom";


type MapStateType = {
    profile: ProfilePropType | null
    isAuth: boolean
}
type MapDispatchType = {
   // setUserProfile: (profile: ProfilePropType) => void
    getUserProfile: (userId: number) => void
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
        this.props.getUserProfile(userId);

        // usersAPI.getProfile(userId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {

        if(!this.props.isAuth) return <Redirect to="/login" />;

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
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    //setUserProfile: actions.setUserProfileAC,
    getUserProfile
})(WithUrlDataContainerComponent);