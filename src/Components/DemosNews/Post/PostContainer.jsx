import React from 'react'
import Posts from "./Post";
import {connect} from "react-redux";
import {addComments, getNewsByTags, onPostChange} from "../../../Redux/demosNews_reducer";
import Post from "./Post";

class PostContainer extends React.Component{
    componentDidMount() {
        this.props.getNewsByTags()
    }
    render() {
        return<div>
            <Post postInfo={this.props.postInfo} textUser={this.props.textUser}
                onPostChange={this.props.onPostChange} addComments={this.props.addComments}/>
        </div>
    }
}
let mapStateToProps = (state) => {
    return{
        postInfo: state.news.postInfo,
        tagsUser: state.news.tagsUser,
        textUser: state.news.textUser,
        username: state.news.username,
    }
}




const PostsContainer = connect(mapStateToProps,{onPostChange, addComments, getNewsByTags})(PostContainer);
export default PostsContainer