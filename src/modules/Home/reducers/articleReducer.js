const initialState = { posts: [], error: ''};

export default function reducer( state = initialState, action ){
    switch (action.type) {
        case 'SET_POSTS_PENDING': {
            break;
        }
        case 'SET_POSTS_REJECTED': {
            return {...state, error: action.payload};
        }
        case 'SET_POSTS_FULFILLED': {
            return {...state, posts: action.payload};
        }
        default: {
            return state
        }
    }
}