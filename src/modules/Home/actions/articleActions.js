import * as bizLogic from '../../../models/Home/bizLogic';

export default function getPosts() {
    return async function(dispatch) {
        const posts = await bizLogic.fetchPosts();
        console.log(posts)
        const actions = [];
        posts.forEach((post) => {
            actions.push({type:'SET_POSTS_FULFILLED', payload: post});
        })
        console.log(actions)
        actions.forEach(element => {
            console.log(element)
            dispatch(element);
        });
    }
}