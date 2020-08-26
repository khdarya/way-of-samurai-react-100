import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsPropType} from '../../../redux/profile-reducer'


export type PostsTypeArray = {
    posts: Array<PostsPropType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (message: string) => void
}


export const MyPosts = (props: PostsTypeArray) => {

    const {posts, newPostText, updateNewPostText, addPost} = props
    const posts1 = posts.map(p => {
        return <Post key={p.id} message={p.message}/>

    })

    const addPostHandler = () => {
        addPost(newPostText)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='Your new post'
                          onChange={onChangeHandler}
                          value={newPostText}
                />
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}> {posts1}</div>
        </div>
    )
}
