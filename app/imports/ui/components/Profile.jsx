import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Table, Card, Image, Header, Grid, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Profiles } from '../../api/profile/Profiles';

/** Renders a profile containing all the athlete's data */
class Profile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderProfile() : <Loader active>Getting Data</Loader>;
  }

  /** Render the component once subscriptions have been received. */
  renderProfile() {
    const profile = this.props.profiles.findOne({ userId: this.props.userId });
    console.log(profile.firstName); // TEST
    return (
        <Card.Content textAlign='center'>
          <Grid columns={2} stackable divided>
            <Grid.Column>
              <Image centered size='medium' rounded
                     src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1432963427/ix9o22ihyxifmqdpr3ue.png"/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center' attached='top' inverted>
                Peter Sadowski
              </Header>
              <Table singleLine stackable inverted attached>
                <Table.Body>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Sport</Table.HeaderCell>
                    <Table.Cell>Football</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.Cell>21</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.Cell>6&apos;5</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                    <Table.Cell>200 lbs</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Graduation</Table.HeaderCell>
                    <Table.Cell>2022</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Major</Table.HeaderCell>
                    <Table.Cell>Communications</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Card.Content>
    );
  }
}

/** Require data to be passed to this component. */
Profile.propTypes = {
  userId: PropTypes.string.isRequired,
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Contacts documents.
  const ProfilesSubscription = Meteor.subscribe(Profiles.userPublicationName);
  return {
    profiles: Profiles.collection.find({}).fetch(),
    ready: ProfilesSubscription.ready(),
  };
})(Profile);
