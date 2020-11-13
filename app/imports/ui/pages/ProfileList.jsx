import React from 'react';
import { Header } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class ProfileList extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <div>
          <Header as="h1">Profile List Page</Header>
          <Header as="h3">Assigned to Franz OR Andy</Header>
        </div>
    );
  }
}

export default ProfileList;
