import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Perfil extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLogged: '',
      tweets: [],
      tweet: {
        message: '',
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

  logout = () => {
    this.props.history.push('/logout');
  }

  goToPerfil = () => {
    this.props.history.push('/perfil');
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
          <img className="img-user" src="https://avatars0.githubusercontent.com/u/8460276?s=460&v=4" alt="usuario" />
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
      <div className="container">
        <div className="content perfil">
          <div className="perfil-info">
            <div className="img-perfil">
              <img src="https://avatars0.githubusercontent.com/u/8460276?s=460&v=4" alt="usuario" />
            </div>
          </div>
          <div className="perfil-edit">
            <div className="input-perfil">
              <label>URL perfil</label>            
              <input />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Perfil);
