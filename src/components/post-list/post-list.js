import React from 'react'
import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({data, changeImp, changeLike, deletePost}) => {
    return (
        <ul className="app-list list-group">
            <PostListItem 
                items={data}
                changeImp={changeImp}
                changeLike={changeLike}
                deletePost={deletePost}
                />
        </ul>
    )
}

export default PostList