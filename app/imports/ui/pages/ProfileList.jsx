import React from 'react';
import _ from 'lodash'
import { Container, Divider, Header, Loader, Table, Icon, Label, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/profile/Profiles';
import ProfileListEntry from '../components/ProfileListEntry';

/** Renders a table containing all of the profiles. Use <Profile> to render each row. */
class ProfileList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      column: 'name',
      data: {this.props.profile}
    }
    this.handleSort = this.handleSort.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleSport = this.handleSport.bind(this)
    this.handleAge = this.handleAge.bind(this)
    this.handleGraduation = this.handleGraduation.bind(this)
    this.handleMajor = this.handleMajor.bind(this)
    this.handleColumn = this.handleColumn.bind(this)
    }

  handleLastName = (e, { value }) => this.setState({ lastName: value })
  handleFirstName = (e, { value }) => this.setState({ firstName: value })
  handleSport = (e, { value }) => this.setState({ sport: value })
  handleAge = (e, { value }) => this.setState({ age: value })
  handleGraduation = (e, { value }) => this.setState({ graduation: value })
  handleMajor = (e, { value }) => this.setState({ major: value })
  handleDirection = (e, { value }) => this.setState({ direction: value })
  handleColumn = (e, { value }) => this.setState({ column: value })

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state
    console.log(column)
    console.log(data)

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })
      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
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
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Sport</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Major</Table.HeaderCell>
                <Table.HeaderCell>Profile</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.profiles.map((profile) => <ProfileListEntry key={profile._id} profile={profile} />)}
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
    profiles: Profiles.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ProfileList);
