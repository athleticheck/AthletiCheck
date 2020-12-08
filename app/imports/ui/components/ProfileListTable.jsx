/*
import React from 'react';
import { Container, Divider, Header, Loader, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/profile/Profiles';
import ProfileListEntry from '../components/ProfileListEntry';

/!** Renders a table containing all of the profiles. Use <Profile> to render each row. *!/
class ProfileListTable extends React.Component {

  /!** Render the Profile page *!/
  renderPage() {
    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
  }
}

/!** Require an array of Stuff documents in the props. *!/
ProfileListTable.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/!** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker *!/
export default withTracker(() => {
  // Get access to Profiles documents.
  const subscription = Meteor.subscribe(Profiles.adminPublicationName);
  return {
    profiles: Profiles.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ProfileListTable);
*/
