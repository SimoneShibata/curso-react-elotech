import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLogged: '',
      tweets: [],
      tweet: {
        message:'',
        user: {
          name: 'Simone Shibata',
          user: 'simoneshibata'
        },
        date: Date.now()
      }
    }
  }

  tweetar = () => {
    this.setState(state => {
      return {
        tweet: {
          message:'',
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

  onChangeValue = event => {
    const value = event.target.value;

    this.setState(state => {
      return {
        tweet: {
          ...state.tweet,
          message: value
        }
      }
    })
  }

  keyPress = event => {
    if (event.key === 'Enter') {
      this.tweetar();
    }
  }

  login = () => {
    this.props.history.push('/login');
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
      <div key={tweet.date} className="tweet">
        <div className="usuario img">
          {tweet.user.name.split('')[0]}
        </div>
        <div className="mensagem">
          <h6><span>{tweet.user.name}</span> @{tweet.user.user} {date}</h6>
          <p>{tweet.message}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        
          <div className="tweetar">
            <div className="usuario img">
              S
            </div>
            <input name="message"
              value={this.state.tweet.message} 
              onKeyPress={this.keyPress} 
              onChange={this.onChangeValue}
            />
            <button className="ok-button" onClick={this.tweetar}>tweetar</button>
          </div>
          <div className="tweets">
            {this.state.tweets.map(this.renderTweets)}
          </div>
        </div>
    );
  }
}

export default withRouter(Home);
