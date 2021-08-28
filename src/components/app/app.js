import React from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Button from '../button';
import './app.css'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'Первая запись', important: false, id: '123'},
        {label: 'Вторая запись', important: false, id: '1223'},
        {label: 'Третья запись', important: false, id: '1523'},
        {label: 'Четвертая запись', important: false, id: '12213'}
      ], 
    }
    this.changeImportant = this.changeImportant.bind(this)
  }

  changeImportant (id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id),
            oldItem = data[index],
            newItem = {...oldItem, important: !oldItem.important},
            newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }      
    })
  }




  render () {
    return (
      <div className="app">
      <AppHeader />
       <div className="search-panel d-flex">
      <SearchPanel />
      <PostStatusFilter />
    </div>
      <PostList 
        data={this.state.data}
        changeImp={this.changeImportant}/>
      <PostAddForm />
    </div>
    )
  }
}