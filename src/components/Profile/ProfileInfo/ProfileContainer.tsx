import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import { getUserProfile, ProfilePropType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router';
import {usersAPI} from "../../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


type MapStateType = {
    profile: ProfilePropType | null
   // isAuth: boolean


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

        return (
            <div>
                <Profile
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state: AppStateType): MapStateType => ({
        profile: state.profilePage.profile
});
//@ts-ignore
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {
    getUserProfile
})(WithUrlDataContainerComponent);