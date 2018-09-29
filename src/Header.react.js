import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    addTweet: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      userLogged: '',
      showMenu: false,
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
    this.props.addTweet(this.state.tweet);
    this.setState({
      tweet: {
        message: '',
        user: {
          name: 'Simone Shibata',
          user: 'simoneshibata'
        },
        date: Date.now()
      }
    });
  }

  onChangeValue = event => {
    const value = event.target.value;

    if (value.length <= 255) {
      this.setState(state => {
        return {
          tweet: {
            ...state.tweet,
            message: value
          }
        }
      });
    }
  }

  keyPress = event => {
    if (event.key === 'Enter') {
      this.tweetar();
    }
  }

  logout = () => {
    this.props.history.push('/logout');
  }

  goToPerfil = () => {
    this.props.history.push('/perfil');
  }

  toggleMenu = () => {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    return (
        <div className="header">
          <div className="options">
            <div className="img-user" onClick={this.toggleMenu}>
              <img src="https://avatars0.githubusercontent.com/u/8460276?s=460&v=4" alt="usuario" />
              {this.state.showMenu &&
                <div className="menu">
                  <ul>
                    <li onClick={this.goToPerfil}>Meu perfil</li>
                    <li onClick={this.logout}>Logout</li>
                  </ul>
                </div>
              }
            </div>
            <input
              className="input-tweet"
              placeholder="O que está acontecendo?"
              name="message"
              value={this.state.tweet.message}
              onKeyPress={this.keyPress}
              onChange={this.onChangeValue}
            />
            <span className="span-tweet">{this.state.tweet.message.length}/255</span>
            <button className="button-tweet" onClick={this.tweetar}>tweetar</button>
          </div>
        </div>
    );
  }
}

export default withRouter(Header);
