import React from 'react';
import { Card, Container, Grid, Image, Button } from 'semantic-ui-react';

const menuStyle = { height: '500px' };
const transLogo = '../images/circular-logo.png';
// const create = '../images/create.png';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className='background-landing'>
            <Grid container stackable verticalAlign="top" textAlign="center" style={menuStyle}>
              <Grid.Row>
                <Grid.Column>
                  <Image centered src={transLogo} size='large'/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Container className="profile-page-container">
            <Card.Group centered>
              <Card>
                <Image src='/images/sadowski.png' alt='profile card' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>Custom Athlete Profiles</Card.Header>
                  <Card.Description>
                    Easy access to athlete profiles for both the athlete and the trainer
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src='/images/signup.png' alt='signup' wrapped ui={false}/>
                <Card.Content>
                  <Card.Description>
                    <div className='ui two buttons'>
                      <Button size='massive' color='black' href="http://localhost:3000/#/about">
                        ABOUT US
                      </Button>
                      <Button size='massive' color='black' href="http://localhost:3000/#/signup">
                        JOIN US
                      </Button>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Image src='/images/visits-two.png' alt='anna' wrapped ui={false}/>
                <Card.Content>
                  <Card.Header>History of Visits</Card.Header>
                  <Card.Description>
                    <p>A single location for all of an athlete’s annotated visits with trainers.</p>
                    <p>Commenting on specific trainer visits</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
    );
  }
}

export default Landing;
