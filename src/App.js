import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import './App.css';
import './tweet.css';
import Routes from './Routes';
import Login from './Login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userLogged: undefined
    }
  }

  logar = user => {
    this.setState({ userLogged: user })
  }

  // render() {
  //   return (
  //     <BrowserRouter>
  //       {this.state.userLogged 
  //         ? Routes()
  //         : <Login logar={this.logar} />
  //       }
  //     </BrowserRouter>
  //   );
  // }
  
  render() {
    return (
      <BrowserRouter>
          {Routes()}
      </BrowserRouter>
    );
  }
}

export default App;
