import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../actions/auth';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: ''
    };
  }

  onLoginChange = e => {
    const { value } = e.target;
    this.setState({ login: value });
  };

  onPasswordChange = e => {
    const { value } = e.target;
    this.setState({ password: value });
  };

  onKeyDown = e => {
    if (e.keyCode == 13) {
      this.onLogin();
    }
  };

  onLogin = () => {
    this.props.signIn(this.state.login, this.state.password);
  };

  render() {
    return (
      <div className="home">
        <h1>Please login</h1>
        <input
          className="text-input"
          type="text"
          placeholder="login"
          value={this.state.login}
          onChange={this.onLoginChange}
        />
        <input
          className="text-input"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onPasswordChange}
          onKeyDown={this.onKeyDown}
        />
        <button onClick={this.onLogin}>Login</button>
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  { signIn }
)(Home);
