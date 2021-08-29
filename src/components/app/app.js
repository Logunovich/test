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
        {label: 'Первая запись', important: false, like: false, id: '123'},
        {label: 'Вторая запись', important: false, like: false, id: '1223'},
        {label: 'Третья запись', important: false, like: false, id: '1523'},
        {label: 'Четвертая запись', important: false, like: false, id: '12213'},
        {label: 'Пятая запись', important: false, like: false, id: '12423'},
        {label: 'Шестая запись', important: false, like: false, id: '15723'},
        {label: 'Седьмая запись', important: false, like: false, id: '1229913'}
      ],
      filter: 'all',
      searchText: ''
    };

    this.idKey = 7; 
    this.changeImportant = this.changeImportant.bind(this);
    this.changeLike = this.changeLike.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.filter = this.filter.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this)
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

  changeLike (id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, like: !oldItem.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  deletePost (id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id),
            newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  addPost (item) {
    this.setState(({data}) => {
      const newItem = {label: item, important: false, like: false, id: this.idKey++}
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  filter (fil) {
    this.setState({filter: fil})
    console.log(this.state.filter)
  }

  searchFilter (items, text) {
    if (text.length > 1) {
      const newArr = items.filter(item => item.label.indexOf(text) > -1)
      return newArr
    } else {
      return items
    }
  }

  changeSearchText (text) {
    this.setState({searchText: text})
  }
  

  render () {
    const countPosts = this.state.data.length,
          countLikePosts = this.state.data.filter(item => item.like === true).length;

    let likedPosts; 
    if (this.state.filter === 'all') {
      likedPosts = this.state.data
    } else {
      likedPosts = this.state.data.filter(item => item.like === true)
    }

    const visiblePosts = this.searchFilter(likedPosts, this.state.searchText);

    return (
      <div className="app">
      <AppHeader 
        all={countPosts}
        like={countLikePosts}/>
       <div className="search-panel d-flex">
      <SearchPanel 
        onChange={this.changeSearchText}/>
      <PostStatusFilter 
        filter={this.filter}/>
    </div>
      <PostList 
        data={visiblePosts}
        changeImp={this.changeImportant}
        changeLike={this.changeLike}
        deletePost={this.deletePost}/>
      <PostAddForm 
        addPost={this.addPost}/>
    </div>
    )
  }
}