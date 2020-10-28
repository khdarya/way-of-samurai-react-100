import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsPropType} from '../../../redux/profile-reducer'
import {reduxForm, Field, InjectedFormProps} from "redux-form";


export type PostsTypeArray = {
    posts: Array<PostsPropType>
   // newPostText: string
   // updateNewPostText: (newText: string) => void
    addPost: (message: string) => void
}

type PostFormDataType = {
    newPostText: string
}

export const MyPosts = (props: PostsTypeArray) => {

    const {posts} = props
    const posts1 = posts.map(p => {
        return <Post key={p.id} message={p.message}/>

    })

    // const addPostHandler = () => {
    //     addPost(newPostText)
    // }
    // const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     updateNewPostText(e.currentTarget.value)
    // }

    let onAddPost = (values: PostFormDataType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <AppNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}> {posts1}</div>
        </div>
    )
}

const AppNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name={"newPostText"} placeholder='Your new post'/>
            </div>
            <button>Add post</button>
        </form>
    )
}
const AppNewPostFormRedux = reduxForm<PostFormDataType>({form: "profileAppNewPostForm"})(AppNewPostForm)