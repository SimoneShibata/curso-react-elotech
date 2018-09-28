import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Cadastro from './Cadastro';

const users = [
  { user: 'simoneshibata', name: 'Simone Shibata', password: '123' },
  { user: 'josue', name: 'Josué Silva', password: '123' }
]

class Login extends Component {

  static propTypes = {
    logar: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: '',
      showCadastro: false
    }
  }

  onChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  login = () => {
    const found = users.filter(u => this.state.user === u.user && this.state.password === u.password)[0];

    if (!!found) {
      this.props.logar(found);
      this.props.history.push('/');
    }
  }

  cadastrar = () => {
    this.setState({ showCadastro: true });
  }

  add = user => {
    users.push(user);
    this.setState({ showCadastro: false });
  }

  render() {

    if (this.state.showCadastro) {
      return (
        <Cadastro add={this.add} />
      );
    }

    return (
      <div className="container container-column container-center login-box">
        <input className="login-input" name="user" onChange={this.onChangeValue} value={this.state.user} />
        <input className="login-input" name="password" type="password" onChange={this.onChangeValue} value={this.state.password} />
        <button className="ok-button" onClick={this.login}>Login</button>
        <span>ou</span>
        <button className="inverse-button" onClick={this.cadastrar}>Cadastre-se</button>
      </div>
    );
  }
}

export default withRouter(Login);
