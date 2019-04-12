import * as bizLogic from '../../../models/Home/bizLogic';

export default function getPostsAction() {
    return async function(dispatch) {
        const data = await bizLogic.fetchPosts();
        const posts = [];
        data.forEach((post) => {
            posts.push(post.data());
        })
        const action = {type: "SET_POSTS_FULFILLED", payload: posts};
        dispatch(action);
    }
}