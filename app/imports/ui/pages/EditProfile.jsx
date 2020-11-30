import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Stuffs } from '../../api/stuff/Stuff';

const bridge = new SimpleSchema2Bridge(Stuffs.schema);

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {

  /** On successful submit, insert the data. */
  // eslint-disable-next-line no-unused-vars
  submit(data) {
    // eslint-disable-next-line no-unused-vars
    const { removeThis } = 5;
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid id="editProfile-page" container centered>
          <Grid.Column>
            <Header as="h1" textAlign="center" inverted className="edit-profile-header">
              Peter Sadowski
            </Header>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
              <Segment>
                {/* try condense the age/height/weight and graduation/major lines */}
                <TextField name='name' label="Sport"/>
                <NumField name='name' label="Age"/>
                <TextField name='name' label="Height"/>
                <TextField name='name' label="Weight"/>
                <TextField name='name' label="Graduation"/>
                <TextField name='name' label="Major"/>
                {/* <TextField name='name'/> */}
                {/* <NumField name='quantity' decimal={false}/> */}
                {/* <SelectField name='condition'/> */}
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Stuffs.userPublicationName);
  return {
    doc: Stuffs.collection.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditProfile);
