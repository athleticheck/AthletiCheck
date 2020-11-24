import React from 'react';
import { Button, Card, Container, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class CardsOriginal extends React.Component {
  render() {
    return (
        <Container className="profile-page-container">
          <Card.Group centered>
            <Card>
              <Image src='/images/bubbles.png' alt='profile card' wrapped ui={false}/>
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
                    <Button size='massive' color='black'
                            as={NavLink} activeClassName="active"exact to="/about">
                      <Button.Content>
                        ABOUT US
                      </Button.Content>
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
          );
  }
}

export default CardsOriginal;
