import React from 'react';
import SmartDataTable from 'react-smart-data-table';
import { Loader, Container, Divider, Table, Header, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
// import { NavLink } from 'react-router-dom';
import { Profiles } from '../../api/profile/Profiles';
import 'react-smart-data-table/dist/react-smart-data-table.css';
import ProfileListEntry from '../components/ProfileListEntry';

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

/*   onRowClick() {
    /!* <Button basic as={NavLink} activeClassName="active"
            exact to={`/admin-profile/${this.props.profiles._id}`}>
      {this.props.profiles.username}
    </Button>; *!/
    console.log('clicked');
    } */

   /** Render the Profile page */
  renderPage() {
    return (
        <Container id="profileList-page">
          <Divider hidden/>
          <Input
              list='filter'
              placeholder='Filter results...'
              icon='search'
              type='text'
              name='filterValue'
              value={this.props.profiles.lastName}
          />
          <Table size='large' celled padded striped stackable>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell colSpan='8' textAlign='center'>
                  <Header>Profile List</Header>
                </Table.HeaderCell>
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
                  perPage={25}
                  // filterValue
                  parseImg={{
                    style: {
                      border: '1px solid #ddd',
                      borderRadius: '2px',
                      padding: '3px',
                      width: '100px',
                      height: '100px',
                    },
                    className: 'ui avatar image',
                  }}
              />
                {this.props.profiles.map((profile) => <ProfileListEntry key={profile._id} profile={profile} />)}
              </Table.Cell>
            </Table.Body>
          </Table>
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
