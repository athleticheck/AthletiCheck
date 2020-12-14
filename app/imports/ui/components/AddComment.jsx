import React from 'react';
import { Segment } from 'semantic-ui-react';
import { AutoForm, ErrorsField, SubmitField, TextField, HiddenField } from 'uniforms-semantic';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Comments } from '../../api/comment/Comments';

const bridge = new SimpleSchema2Bridge(Comments.schema);

/** Renders the Page for adding a document. */
class AddVisit extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { visitId, date, author, athlete, comment } = data;
    Comments.collection.insert({ visitId, date, author, athlete, comment },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Comment added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
          <Segment>
            <TextField label="Add a timestamped comment" name="comment"/>
            <SubmitField value='Submit'/>
            <ErrorsField/>
            <HiddenField name="author" value={this.props.author}/>
            <HiddenField name="athlete" value={this.props.athlete}/>
            <HiddenField name="visitId" value={this.props.visitId}/>
            <HiddenField name="date" value={new Date()}/>
          </Segment>
        </AutoForm>
    );
  }
}

/** Require documents to be passed to this component. */
AddVisit.propTypes = {
  author: PropTypes.string.isRequired,
  athlete: PropTypes.string.isRequired,
  visitId: PropTypes.string.isRequired,
};

export default AddVisit;
