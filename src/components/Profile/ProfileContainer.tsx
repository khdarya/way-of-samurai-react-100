import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfilePropType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {usersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateType = {
    profile: ProfilePropType | null
    status: string
    authorizedUserId: any
    isAuth: boolean
}

type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string

}
type OwnPropsType = MapDispatchType & MapStateType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {

            userId = this.props.authorizedUserId;

        }

        if (!userId) {
            console.error("ID should exists in URI params or in state");
        } else {

            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
//     getUserProfile
// })(WithUrlDataContainerComponent);

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)