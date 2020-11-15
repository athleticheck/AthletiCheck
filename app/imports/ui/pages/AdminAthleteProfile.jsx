import React from 'react';
import { Card, Container, Header, Button, Divider } from 'semantic-ui-react';
import Profile from '../components/Profile';
// import Visit from '../components/Visit';

/** Renders the Page for adding a document. */
class AdminAthleteProfile extends React.Component {

  /** Render the Admin Profile page */
  render() {
    return (
        <Container className='profile-page-container'>
          <Card fluid centered>
            <Profile/> {/* NEED TO PASS VALUES TO THIS */}
            <Card.Content extra>
              <Button fluid>
                Edit Profile
              </Button>
            </Card.Content>
          </Card>
          <Divider horizontal>
            <Header as='h1' textAlign='center' inverted>VISITS</Header>
          </Divider>
          <Container className='profile-page-visits'>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Header as='h3' textAlign='center' disabled>
                  No recorded visits with a trainer
                </Header>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </Container>
    );
  }
}

export default AdminAthleteProfile;
