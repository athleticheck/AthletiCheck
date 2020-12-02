import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Profiles } from '../../api/profile/Profiles';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { redirectToProfile: false };
  }

  /** On successful submit, insert the data. */
  submit(data) {
    // check that the _id is what i think it is, and the hiddenFields can be ignored
    const { imageURL, sport, age, height, weight, graduation, major, _id } = data;
    Profiles.collection.update(_id, { $set: { imageURL, sport, age, height, weight, graduation, major } },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item updated successfully', 'success');
            this.setState({ redirectToProfile: true });
          }
        });
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    // redirect back to admin-profile page once edit is complete
    if (this.state.redirectToProfile) {
      return <Redirect to={`/admin-profile/${this.props.profile._id}/`}/>;
    }
    return (
        <Grid id="editProfile-page" container centered>
          <Grid.Column>
            <Header as="h1" textAlign="center" inverted className="edit-profile-header">
              {this.props.profile.firstName} {this.props.profile.lastName}
            </Header>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.profile}>
              <Segment>
                {/* try condense the age/height/weight and graduation/major lines */}
                {/* check that it auto-fills current data */}
                <TextField name='imageURL' label="Image URL"/>
                <TextField name='sport' label="Sport"/>
                <NumField name='age' label="Age" decimal={false}/>
                <TextField name='height' label="Height"/>
                <TextField name='weight' label="Weight"/>
                <TextField name='graduation' label="Graduation"/>
                <TextField name='major' label="Major"/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='username' />
                <HiddenField name='firstName' />
                <HiddenField name='lastName' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Profiles document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  profile: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const profileId = match.params._id;
  // Get access to Stuff documents.
  const ProfilesSubscription = Meteor.subscribe(Profiles.adminPublicationName);
  return {
    profile: Profiles.collection.findOne(profileId),
    ready: ProfilesSubscription.ready(),
  };
})(EditProfile);
