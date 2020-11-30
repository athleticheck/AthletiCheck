import React from 'react';
import { Table, Card, Image, Header, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  /** Renders a profile containing all the athlete's data */
  render() {
    return (
        <Card.Content textAlign='center'>
          <Grid columns={2} stackable divided>
            <Grid.Column>
              <Image centered size='medium' rounded
                     src={this.props.profile.imageURL}/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center' attached='top' inverted>
                {this.props.profile.firstName} {this.props.profile.lastName}
              </Header>
              <Table singleLine stackable inverted attached>
                <Table.Body>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Sport</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.sport}</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.age}</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.height}</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.weight}</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Graduation</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.graduation}</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Major</Table.HeaderCell>
                    <Table.Cell>{this.props.profile.major}</Table.Cell>
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
  profile: PropTypes.object.isRequired,
};

export default Profile;
