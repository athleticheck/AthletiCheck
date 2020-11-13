import React from 'react';
import { Header } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class EditProfile extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <div>
          <Header as="h1">Edit Athlete Profile Page</Header>
          <Header as="h3">Assigned to Robert</Header>
        </div>
    );
  }
}

export default EditProfile;
