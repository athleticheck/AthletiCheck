import React from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class ProfileListEntry extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.profile.lastName}</Table.Cell>
          <Table.Cell>{this.props.profile.firstName}</Table.Cell>
          <Table.Cell>{this.props.profile.sport}</Table.Cell>
          <Table.Cell>{this.props.profile.age}</Table.Cell>
          <Table.Cell>{this.props.profile.graduation}</Table.Cell>
          <Table.Cell>{this.props.profile.major}</Table.Cell>
          <Table.Cell>{this.props.profile.userId}</Table.Cell>
          <Table.Cell>
            <Button basic as={NavLink} activeClassName="active"
                    exact to={`/admin-profile/${this.props.profile.userId}`}>
              <Icon name='user outline' />
            </Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileListEntry.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileListEntry;