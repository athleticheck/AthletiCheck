import React from 'react';
import { Header } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class AthleteProfile extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <div>
          <Header as="h1">Athlete Profile Page</Header>
          <Header as="h3">Assigned to Robert</Header>
        </div>
    );
  }
}

export default AthleteProfile;
