import React from 'react'
import './app-header.css'

const AppHeader = ({all, like}) => {
    return (
            <div className="app-header d-flex">
                <h1>Логунович Денис</h1>
                <h2>{all} записей, из них понравилось {like}</h2>
            </div>
    )
}

export default AppHeader