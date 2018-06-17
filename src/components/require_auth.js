import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hasToken } from '../services/auth';
import { signOut } from '../actions/auth';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const authenticated = this.props.auth && hasToken();
      if (!authenticated) {
        this.props.signOut();
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({ auth: state.auth.signedIn });

  return connect(
    mapStateToProps,
    { signOut }
  )(ComposedComponent);
};
