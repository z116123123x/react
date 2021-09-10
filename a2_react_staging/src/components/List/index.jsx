import React, { Component } from 'react';
import './index.css'

export default class List extends Component {
  render() {
    const { props: { users } } = this;
    return (
      <div className="row">

        {
          users.map(user => {
            return (
              <div key={user.id} className="card">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={user.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}
