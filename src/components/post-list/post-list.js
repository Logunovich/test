import React from 'react'
import PostListItem from '../post-list-item'
import './post-list.css'

const PostList = ({data, changeImp}) => {
    return (
        <ul className="app-list list-group">
            <PostListItem 
                items={data}
                changeImp={changeImp}
                />
        </ul>
    )
}

export default PostList