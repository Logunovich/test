import React from 'react';
import './search-panel.css'

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
        this.changeSearchText = this.changeSearchText.bind(this)
    }
    

    changeSearchText (e) {
        this.props.onChange(e.target.value)
    }


    render () {
        return (
        <input
            onChange={this.changeSearchText}
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям" 
        />
        )
    }
}
