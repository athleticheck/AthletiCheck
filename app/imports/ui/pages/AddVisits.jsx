import React from 'react';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/Stuff';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  trainer: String,
  email: String,
  date: Date,
  clearance: {
    type: String,
    allowedValues: ['Cleared to Play', 'NOT Cleared to Play'],
    defaultValue: '',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVisits extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { trainer, email, date, clearance } = data;
    const owner = Meteor.user().username;
    Stuffs.collection.insert({ trainer, email, date, clearance },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Visit added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Divider hidden />
            <Header as="h2" textAlign="center">Add New Visit</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='trainer'/>
                <TextField name='email'/>
                <TextField name='date'/>
                <SelectField name='clearance'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVisits;
