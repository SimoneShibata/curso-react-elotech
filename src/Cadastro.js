import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Cadastro extends Component {

  static propTypes = {
    add: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      user: '',
      password: ''
    }
  }

  onChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  cadastrar = () => {
    this.props.add(this.state);
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <input className="login-input" name="name" onChange={this.onChangeValue} value={this.state.name} />
        <input className="login-input" name="user" onChange={this.onChangeValue} value={this.state.user} />
        <input className="login-input" name="password" type="password" onChange={this.onChangeValue} value={this.state.password} />
        <button className="ok-button" onClick={this.cadastrar}>Cadastrar</button>
      </div>
    );
  }
}

export default withRouter(Cadastro);
