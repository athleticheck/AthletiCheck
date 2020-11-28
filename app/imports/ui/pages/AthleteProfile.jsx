import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Divider } from 'semantic-ui-react';
import Visit from '../components/Visit';
import Profile from '../components/Profile';

/** Renders the Page for adding a document. */
class AthleteProfile extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <Container className='profile-page-container'>
          <Card fluid centered className="profile-page-profile">
            <Profile userId={Meteor.userId}/>
          </Card>
          <Container className='profile-page-spacing'>
            <Divider horizontal>
              <Header as='h1' textAlign='center' inverted>VISITS</Header>
            </Divider>
          </Container>
          <Container className='profile-page-spacing'>
            <Card.Group>
              <Visit date={new Date().toDateString()} trainer="trainer3@gmail.com"
                     note="Back injured from carrying the entire team.  He shouldn't play again until his team practices more, in an effort to avoid future back injuries"
                     cleared={false}/>
              <Visit date={new Date().toDateString()} trainer="trainer2@gmail.com"
                     note="This man is in the best shape I have ever seen.  He should play as often as possible!"
                     cleared={true}/>
              <Visit date={new Date().toDateString()} trainer="trainer1@gmail.com"
                     note="Ankle injured from running 180 miles per hour.  I recommend icing ankle, but it shoud be fine"
                     cleared={true}/>
            </Card.Group>
          </Container>
        </Container>
    );
  }
}

export default AthleteProfile;
