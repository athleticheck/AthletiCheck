import React from 'react';
import { Divider, Grid, Header, Segment } from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField } from 'uniforms-semantic';

const formSchema = new SimpleSchema({
date: Date,
    clearance: {
  type: String,
      allowedValues: ['Cleared', 'NOT Cleared'],
      defaultValue: 'Cleared',
},
comment: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddVisit extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Divider hidden />
            <Header as="h1" textAlign="center" inverted>Add New Visit</Header>
            <AutoForm schema={bridge}>
              <Segment>
                <SelectField name='clearance'/>
                <LongTextField name='comment' />
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddVisit;
