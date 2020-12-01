import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ProfileListEntry extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.profiles.lastName}</Table.Cell>
          <Table.Cell>{this.props.profiles.firstName}</Table.Cell>
          <Table.Cell>{this.props.profiles.sport}</Table.Cell>
          <Table.Cell>{this.props.profiles.age}</Table.Cell>
          <Table.Cell>{this.props.profiles.graduation()}</Table.Cell>
          <Table.Cell>{this.props.profiles.major}</Table.Cell>
          <Table.Cell>{this.props.profiles.userId}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileListEntry.propTypes = {
  profiles: PropTypes.object.isRequired,
};

export default ProfileListEntry;
