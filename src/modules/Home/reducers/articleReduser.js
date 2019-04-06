const initialState = { posts: [], error: ''};

export default function reducer( state = initialState, action ){
    console.log('fuga')
    switch (action.type) {
        case 'SET_POSTS_PENDING': {
            console.log('pending')
            break;
        }
        case 'SET_POSTS_REJECTED': {
            console.log('rejected')
            return {...state, error: action.data};
        }
        case 'SET_POSTS_FULFILLED': {
            console.log('hoge')
            return {...state, post: action.data};
        }
        default: {
            return state
        }
    }
}