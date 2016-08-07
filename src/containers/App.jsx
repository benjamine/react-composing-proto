import React from 'react';
import { connect } from 'react-redux';
import { userQueryChanged } from '../actions';
import Root from '../components/Root';

const App = props => (
  <Root {...props} />
);

const mapStateToProps = state => ({
  user: state.get('user')
});

export default connect(
  mapStateToProps,
  {
    onUserQueryChanged: e => userQueryChanged(e.target.value)
  }
)(App);
