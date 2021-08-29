import React, {Component} from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.submitForm = this.submitForm.bind(this);
        this.changeText = this.changeText.bind(this);
    }


submitForm (e) {
    e.preventDefault();
        if (this.state.text.length > 0) {
        this.props.addPost(this.state.text);
        this.setState ({
            text: ''
        })
      } 

}

changeText (e) {
    e.preventDefault();
    this.setState({text: e.target.value})
}

render () {
    const {addPost} = this.props;
        return (
    <form 
        className="bottom-panel d-flex"
        onSubmit={this.submitForm}>
        <input 
        type="text"
        placeholder="Добавить новую заметку"
        className="form-control new-post-label"
        onChange={this.changeText}
        value={this.state.text}/>

        <button
        type="submit"
        className="btn btn-outline-secondary">
            Добавить пост
        </button>
    </form>
        )
    }
}