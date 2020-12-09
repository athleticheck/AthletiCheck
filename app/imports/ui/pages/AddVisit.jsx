import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Divider, Grid, Header, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, LongTextField, BoolField, SubmitField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema from 'simpl-schema';
import { Visits } from '../../api/visit/Visits';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  profileId: String,
  date: Date,
  trainer: String,
  cleared: { type: Boolean, required: false },
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a visit. */
class AddVisit extends React.Component {

  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { redirectToProfile: false };
  }

  /** On submit, insert the data. */
  submit(data) {
    const { cleared, description, profileId, date, trainer } = data;
    // console.log(cleared);
    Visits.collection.insert({ cleared: !!cleared, description, profileId, date, trainer },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            this.setState({ redirectToProfile: true });
            // window.location.href = `/admin-profile/${this.props.profileId}/`; // use constructor method
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    // redirect back to admin-profile page once visit has been added
    if (this.state.redirectToProfile) {
      return <Redirect to={`/admin-profile/${this.props.profileId}/`}/>;
    }
    return (
        <Grid id="addVisit-page" container centered>
          <Grid.Column>
            <Divider hidden />
            <Header as="h1" textAlign="center" inverted>Add New Visit</Header>
            <AutoForm schema={bridge} onSubmit={data => this.submit(data)} >
              <Segment>
                <LongTextField name='description'/>
                <BoolField name='cleared'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name="profileId" value={this.props.profileId}/>
                <HiddenField name="date" value={new Date()}/>
                <HiddenField name="trainer" value={Meteor.user().username}/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require documents to be passed to this component. */
AddVisit.propTypes = {
  profileId: PropTypes.string.isRequired,
};

export default withTracker(({ match }) => {
  const profileId = match.params._id;
  return {
    profileId: profileId,
  };
})(AddVisit);
