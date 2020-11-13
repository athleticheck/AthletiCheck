import React from 'react';
import { Header } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class AddVisit extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <div>
          <Header as="h1">Add Visit Page</Header>
          <Header as="h3">Assigned to Franz OR Andy</Header>
        </div>
    );
  }
}

export default AddVisit;
