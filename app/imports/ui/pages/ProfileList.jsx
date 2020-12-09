import React from 'react';
import SmartDataTable from 'react-smart-data-table';
import { Loader, Container, Divider, Table, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { NavLink } from 'react-router-dom';
import { Profiles } from '../../api/profile/Profiles';
import 'react-smart-data-table/dist/react-smart-data-table.css';
// import ProfileListEntry from '../components/ProfileListEntry';

/** Renders a table containing all of the profiles. Use <Profile> to render each row. */
class ProfileList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  getColumns(profile) {
    return { athlete: profile.imageURL, lastName: profile.lastName, firstName: profile.firstName, sport: profile.sport,
      age: profile.age, graduation: profile.graduation, major: profile.major, profile: profile.username };
  }

  /** Render the Profile page */
  renderPage() {
    return (
        <Container id="profileList-page">
          <Divider hidden/>
          <Table size='large' celled padded striped stackable singleLine>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell colSpan='8' textAlign='center'>
                  <Header>Profile List</Header>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>Athlete</Table.HeaderCell>
{/*                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Sport</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Major</Table.HeaderCell> */}
                <Table.HeaderCell>Profile</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Cell>
              <SmartDataTable
                  data={this.props.profiles.map(this.getColumns) }
                  name="profile-list"
                  className="ui compact selectable table"
                  sortable
                  onRowClick={this.onRowClick}
                  withToggles
                  withLinks
                  perPage={25}
                  // filterValue
                  parseImg={{
                    style: {
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      padding: '3px',
                      width: '60px',
                    },
                    className: 'ui avatar image',
                  }}
              />
              </Table.Cell>
              <Table.Cell>
                <Button basic as={NavLink} activeClassName="active"
                        exact to={`/admin-profile/${this.props.profiles._id}`}>
                  {this.props.profiles.username}
                </Button>
              </Table.Cell>
            </Table.Body>
          </Table>
          <Divider hidden/>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Profiles documents.
  const subscription = Meteor.subscribe(Profiles.adminPublicationName);
  return {
    profiles: Profiles.collection.find({}, { sort: { lastName: 1 } }).fetch(),
    ready: subscription.ready(),
  };
})(ProfileList);
