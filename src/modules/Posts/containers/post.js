import { Component } from 'react';
import getPostsAction from '../../../vender/actions/articleActions';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.props.dispatcher.dispatch(getPostsAction());
    }

    render() {
        console.log(this.props);
        return (
            null
        )
    }
}