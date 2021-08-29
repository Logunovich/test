import React from 'react'
import './post-status-filter.css'

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
        this.buttons = [
            {label: 'Все', index: 'all', id: '1'},
            {label: 'Понравилось', index: 'like', id: '2'},
        ]
        this.changeFilter = this.changeFilter.bind(this)
    }

    changeFilter (filter) {
        this.props.filter(filter);
        if (this.state.filter === filter) {
            this.setState({filter: filter})
        } else {
            this.setState({filter: filter})
            console.log(filter)
        }

    }

    render () {
        const buttons = this.buttons.map(item => {
            if (item.index === this.state.filter) {
                return (
                    <button 
                        type="button" 
                        className="btn btn-info" 
                        key={item.id} 
                        onClick={() => this.changeFilter(item.index)}>
                            {item.label}
                        </button>
                )
            } else {
                return (
                    <button 
                        type="button" 
                        className="btn btn-autoline-secondary" 
                        key={item.id} 
                        onClick={() => this.changeFilter(item.index)}>
                            {item.label}
                        </button>
                )
            }

        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}