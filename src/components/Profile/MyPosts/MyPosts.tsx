import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, PostsType} from "../../../redux/state";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer"

export type PostsTypeArray = {
    posts: Array<PostsType>
   // addPost: (postText: string) => void
   // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: PostsTypeArray) => {

    let postsElements =
        props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

    /*let newPostElement = React.createRef<HTMLTextAreaElement>();*/


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText));
       // props.addPost(props.newPostText);
    }

    let onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {


        props.dispatch(updateNewPostTextActionCreator(event.currentTarget.value));

       // props.updateNewPostText(event.currentTarget.value);

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                    <textarea placeholder='Your new post'
                        value={props.newPostText}
                              onChange={onPostChangeHandler}
                    />
                    <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;