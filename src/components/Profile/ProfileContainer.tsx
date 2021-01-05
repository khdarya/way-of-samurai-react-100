import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    saveProfileTC,
    updatePhoto,
    updateStatus,
    UserProfileType
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {compose} from "redux";


type MapStateType = {
    profile: UserProfileType  | null
    status: string
    authorizedUserId: any  //number | null
    isAuth: boolean
}

type MapDispatchType = {
    getUserProfile: (userId: number | null) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profi: UserProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string

}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        if (!userId) {
            this.props.history.push("/login")
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {

        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.refreshProfile();
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         saveProfile={this.props.saveProfile}
                />
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {    //<MapStateType, MapDispatchType, {}, AppStateType>
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto: updatePhoto,
        saveProfile: saveProfileTC,
    }),
    withRouter,
)(ProfileContainer)