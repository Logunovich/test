import React from 'react';
import './post-list-item.css'

const PostListItem = ({items, changeImp}) => {
    return (
      items.map(item => {
        let classNames = 'app-list-item d-flex justify-content-between';
        if (item.important) {
          classNames += ' important'
        }
        return (
          <li key={item.id} className="list-group-item">
          <div className={classNames}>
          <span className="app-list-item-label">
          {item.label}
          </span> 
       <div className="d-flex justify-content-center align-items-center">
      <button
        onClick={()=> changeImp(item.id)}
        type="button" 
        className="btn-star btn-sm">
        <i className="fa fa-star"></i>
      </button>
      <button 
        type="button" 
        className="btn-trash btn-sm">
        <i className="fa fa-trash-o"></i>
     </button>
     <i className="fa fa-heart"></i>
      </div>    
     </div>
     </li>
        )
      }) 
    )
}

export default PostListItem