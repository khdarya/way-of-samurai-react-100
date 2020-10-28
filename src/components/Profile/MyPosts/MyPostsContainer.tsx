import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
    addPost,
    PostsPropType,
} from "../../../redux/profile-reducer";

type MapStateType = {
    posts: Array<PostsPropType>
}
type MapDispatchType = {
    addPost: (message: string) => void
  //  updateNewPostText: (newText: string) => void
}
type OwnerType = {}
type PropsType = OwnerType & MapStateType & MapDispatchType

const MyPostsContainer = (props: PropsType) => {

    const {posts, addPost} = props

    return (
        <MyPosts
            posts={posts}
           // newPostText={newPostText}
         //   updateNewPostText={updateNewPostText}
            addPost={addPost}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        posts: state.profilePage.posts
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return (message: string) => {dispatch(actions.addPostActionCreator(message))}
//
// }


export default connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    addPost
})(MyPostsContainer)