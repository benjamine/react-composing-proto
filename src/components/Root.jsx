import React from 'react';
import UserSelector from './UserSelector';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { AppComponent as ChildApp } from 'react-composing-proto-child/public/dist/bundle-component';

const Root = props => (
  <section>
    <UserSelector onQueryChange={props.onUserQueryChanged} />

    { props.user && props.user.get('data') && props.user.get('data').get('avatarUrl')
      ? <img src={props.user.get('data').get('avatarUrl')}
          alt={props.user.get('data').get('login')}
          style={{ maxWidth: 50 }}
        />
      : null
    }
    { props.user && props.user.get('fetching') ? 'loading...' : '' }
    { props.user && props.user.get('fetchError') ? props.user.get('fetchError').message : (
        props.user && props.user.get('data')
          ? <ChildApp
              username={props.user.get('data').get('login')}
            />
          : 'no user selected'
      )
    }

  </section>
);

Root.propTypes = {
  onUserQueryChanged: React.PropTypes.func,
  user: ImmutablePropTypes.contains({
    fetching: React.PropTypes.bool,
    fetchError: React.PropTypes.error,
    data: ImmutablePropTypes.contains({
      login: React.PropTypes.string.isRequired,
      avatarUrl: React.PropTypes.string.isRequired
    })
  })
};

export default Root;
