import React from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsPropType} from '../../../redux/profile-reducer'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


export type PostsTypeArray = {
    posts: Array<PostsPropType>
   // newPostText: string
   // updateNewPostText: (newText: string) => void
    addPost: (message: string) => void
}

type PostFormDataType = {
    newPostText: string
}

// componentDidUpdate(prevProps: Readonly<PostsTypeArray>, prevState: Readonly<{}>, snapshot?: any) {
//     console.log('RENDER')
// }
//
// componentDidMount() {
//     setTimeout(() => {
//      this.setState({a: 12});
//     }, 3000)
// }
//
// shouldComponentUpdate(nextProps: Readonly<PostsTypeArray>, nextState: Readonly<{}>, nextContext: any): boolean {
//     return nextProps != this.props || nextState != this.state;
// }    inside component MyPosts

export const MyPosts = React.memo((props: PostsTypeArray) => {

    console.log('RENDER YO')

    const postsElements =
        [...props.posts]
        .reverse()
        .map(p => {
        return <Post key={p.id} message={p.message}/>

    })

    let onAddPost = (values: PostFormDataType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AppNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}> {postsElements}</div>
        </div>
    )

});

const maxLength10 =  maxLengthCreator(10);

const AppNewPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {



    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"newPostText"}
                       placeholder='Your new post' validate={[required, maxLength10]}/>
            </div>
            <button>Add post</button>
        </form>
    )
}
const AppNewPostFormRedux = reduxForm<PostFormDataType>({form: "profileAppNewPostForm"})(AppNewPostForm)