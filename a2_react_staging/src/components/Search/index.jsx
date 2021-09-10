import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

  search = () => {
    // 獲取用戶輸入, 通過解構賦值 + 重命名
    const { keyWordNode: { value: keyWord } } = this;
    // 發送網路請求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => this.props.saveUsers(response.data.items),
      error => console.log('失敗了: ', error)
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github Users</h3>
        <div>
          <input ref={node => this.keyWordNode = node} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
