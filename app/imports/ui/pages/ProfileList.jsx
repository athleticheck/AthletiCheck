import React from 'react';
import SmartDataTable from 'react-smart-data-table';
import { Loader, Container, Divider, Table, Header, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router';
import { Profiles } from '../../api/profile/Profiles';
import 'react-smart-data-table/dist/react-smart-data-table.css';
// import ProfileListEntry from '../components/ProfileListEntry';

/** Renders a table containing all of the profiles. Use <Profile> to render each row. */
class ProfileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  getColumns(profile) {
    return { athlete: profile.imageURL, lastName: profile.lastName, firstName: profile.firstName, sport: profile.sport,
      age: profile.age, graduation: profile.graduation, major: profile.major, email: profile.username };
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => {
      if (name === 'numResults') this.setNewData();
    });
  }

  setNewData() {
    const { data } = this.state;
    this.setState({
      data: data,
    });
  }

  onRowClick(event, { rowData }) {
    const { showOnRowClick } = this.state;
    if (showOnRowClick) {
      const { id } = rowData;
      // const page = Object(rowData.page);
      let value = id;
      if (!value) {
        const [key] = Object.keys(rowData);
        value = `${key}: ${rowData[key]}`;
        console.log('Invalid');
      }
      /* eslint-disable no-alert */
    } else {
      // const { from } = this.props.profiles || { from: { pathname: '/profile' } };
      console.log([Object(rowData.page)]);
      <Redirect to={'/about'}/>;
    }
    return <Redirect to={'/about'}/>;
  }

/*   onRowClick() {
    console.log('clicked');
    return <Redirect to={'/about'}/>;
    console.log(this.props.profiles);
    this.setState({ redirect: '/about' });
  } */

  /* /!** Handle Signin submission using Meteor's account mechanism. *!/
onRowClick = () => {
  const { email, password } = this.state;
  Meteor.loginWithPassword(email, password, (err) => {
    if (err) {
      this.setState({ error: err.reason });
    } else {
      this.setState({ error: '', redirectToReferer: true });
    }
  });
} */

  /* /!** Render the signin form. *!/
  render() {
    const { from } = this.props.location.state || { from: { pathname: `/admin-profile/${this.props.profiles._id}` } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    } */

  /** Render the Profile page */
  renderPage() {
    const {
      filterValue,
    } = this.state;
    return (
        <Container id="profileList-page">
          <Divider hidden/>
          <Input
              list='filter'
              placeholder='Filter results...'
              icon='search'
              type='text'
              name='filterValue'
              value={filterValue}
              onChange={this.handleOnChange}
          />
          <Table size='large' celled padded striped stackable>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>
                  <Header>Profile List</Header>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
          <SmartDataTable
              data={this.props.profiles.map(this.getColumns) }
              name="profile-list"
              className="ui compact selectable table"
              sortable
              onRowClick={this.onRowClick}
              withToggles
              perPage={25}
              filterValue={filterValue}
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
