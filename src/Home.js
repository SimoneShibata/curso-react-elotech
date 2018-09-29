import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header.react';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLogged: '',
      tweets: []
    }
  }

  tweetar = () => {
    this.setState(state => {
      return {
        tweet: {
          message: '',
          user: {
            name: 'Simone Shibata',
            user: 'simoneshibata'
          },
          date: Date.now()
        },
        tweets: [...state.tweets, this.state.tweet]
      };
    })
  }

  addTweet = tweet => {
    this.setState(state => {
      return { tweets: [...state.tweets, tweet] };
    });
  }

  renderTweets = tweet => {
    const date = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(tweet.date);

    return (
      <div key={tweet.date} className="card">
        <div className="user-tweet">
          <img src="https://avatars0.githubusercontent.com/u/8460276?s=460&v=4" alt="usuario" />
        </div>
        <div>
          <div className="title">
            <h1><span>{tweet.user.name}</span> @{tweet.user.user} {date}</h1>
          </div>
          <div className="message">
            <p>{tweet.message}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header addTweet={this.addTweet} />
        <div className="container">
          <div className="content">
            <div className="content-body">
              {this.state.tweets.map(this.renderTweets)}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Home);
