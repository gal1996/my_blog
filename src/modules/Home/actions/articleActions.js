import axios from 'axios';

export function setPosts() {
    return function(dispatch) {
        dispatch({type: "SET_POSTS"});

    axios.get("")
        .then((response) => {
            dispatch({type: "SET_POSTS_FULFILLED", data: response.data})
        })
        .catch((err) => {
            dispatch({type: "SET_POSTS_REJECTED", data: err})
        });
    };
}