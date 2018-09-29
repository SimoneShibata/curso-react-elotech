import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {

  back = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="notfound">
        <div className="error">
          <h1>4</h1>
          <img src="https://cdn1.iconfinder.com/data/icons/out-of-the-world/512/planet_earth_venues_univearse_pluto-512.png" />
          <h1>4</h1>
        </div>
        <h2>Página não encontrada</h2>
        <button className="ok-button" onClick={this.back}>Voltar</button>
      </div>
    );
  }
}

export default withRouter(NotFound);
