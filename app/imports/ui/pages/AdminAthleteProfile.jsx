import React from 'react';
import { Card, Container, Header, Button, Divider } from 'semantic-ui-react';
import { withRouter, NavLink } from 'react-router-dom';
import Profile from '../components/Profile';
// import Visit from '../components/Visit';

/** Renders the Page for adding a document. */
class AdminAthleteProfile extends React.Component {

  /** Render the Admin Profile page */
  render() {
    return (
        <Container id="adminProfile-page">
          <Container textAlign='center' className="profile-page-spacing">
            <Divider horizontal>
              <Button
                  size='massive' inverted color='green'
                  as={NavLink} activeClassName="active" exact to="/add-visit">
                Add New Visit
              </Button>
            </Divider>
          </Container>
          <Card fluid centered className="profile-page-profile">
            <Profile/> {/* NEED TO PASS VALUES TO THIS */}
            <Card.Content extra>
              <Button fluid
                      as={NavLink} activeClassName="active" exact to="/edit-profile">
                Edit Profile
              </Button>
            </Card.Content>
          </Card>
          <Container className="profile-page-spacing">
            <Divider horizontal>
            <Header as='h1' textAlign='center' inverted>VISITS</Header>
           </Divider>
          </Container>
          <Container className='profile-page-spacing'>
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

export default withRouter(AdminAthleteProfile);
