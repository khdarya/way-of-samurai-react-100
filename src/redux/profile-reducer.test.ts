import profileReducer, {
    addPost,
    deletePost,
    InitialStateType,
    PostsPropType,
    UserProfileType
} from "./profile-reducer";

//let posts: Array<PostsPropType> = [];
let postId1: number
let postId2: number
let startState: InitialStateType;


beforeEach(() => {
    postId1 = 1
    postId2 = 2
    startState = {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 10},
            {id: 3, message: 'Bla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 14}
        ] as Array<PostsPropType>,
        profile: null as UserProfileType | null,
        status: '' as string
    }

})

it('length of post should be incremented ', () => {
    let action = addPost("new post text");

    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(5);

})

it('new post should be added with correct message', () => {
    let action = addPost("new post text");

    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(5);
    expect(newState.posts[0].message).toBe("new post text");
})

it('after deleting length of posts should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(startState, action);

    expect(newState.posts.length).toBe(3);

})




