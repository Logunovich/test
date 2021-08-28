import React from 'react'
import './post-add-form.css'

const PostAddForm = () => {
    return (
    <form className="bottom-panel d-flex">
        <input 
        type="text"
        placeholder="Добавить новую заметку"
        className="form-control new-post-label"
        />

        <button
        type="submit"
        className="btn btn-outline-secondary">
            Добавить пост
        </button>
    </form>
    )
}

export default PostAddForm;