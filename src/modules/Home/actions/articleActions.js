import * as bizLogic from '../../../models/Home/bizLogic';

export function setPosts() {
    console.log('hega')
    return function(dispatch) {
        dispatch({type: "SET_POSTS"});
        const actions = bizLogic.getPosts();
        console.log(actions)
        actions.forEach(element => {
            console.log(element)
            dispatch(element);
        });
    }
}