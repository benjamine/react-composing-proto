import React from 'react';

const UserSelector = props => (
  <div>
    <input type="text"
        name="username"
        placeholder="enter a github username"
        onChange={props.onQueryChange}
    />
  </div>
);

UserSelector.propTypes = {
  onQueryChange: React.PropTypes.func
};

export default UserSelector;
