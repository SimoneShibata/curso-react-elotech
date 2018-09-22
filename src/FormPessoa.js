import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class FormPessoa extends Component {

  static propTypes = {
    add: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: ''
    }
  }

  onChangeValue = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  add = () => {
    const { nome, idade } = this.state;

    if (nome && idade) {
      const pessoa = { nome, idade };
      this.props.add(pessoa);

      this.setState({
        nome: '',
        idade: ''
      });
    }
  }

  keyPress = event => {
    if (event.key === 'Enter') {
      this.add();
    }
  }

  renderPessoas = pessoa => {
    return (
      <div key={pessoa.nome}>{`${pessoa.nome} possui ${pessoa.idade} anos`}</div>
    );
  }

  render() {
    return (
      <div className="form">
        <input name="nome"
          placeholder="nome"
          value={this.state.nome}
          onChange={this.onChangeValue}
        />
        <input name="idade"
          placeholder="idade"
          value={this.state.idade}
          onChange={this.onChangeValue}
          onKeyPress={this.keyPress}
        />
        <button className="button" onClick={this.add}>
          +
        </button>
      </div>
    );
  }
}

export default FormPessoa;
