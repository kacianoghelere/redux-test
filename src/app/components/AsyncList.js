import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class AsyncList extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user, index) => (
      <li key={index}>{user.email}</li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderUsers()}
      </ul>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncList);
