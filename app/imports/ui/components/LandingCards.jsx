import React from 'react';
import { Table, Card, Image, Header, Grid, Container } from 'semantic-ui-react';

class LandingCards extends React.Component {

  render() {
    return (
        <Container>
          <Card.Group centered>
            <Card>
              <Image src='https://annacampainha.github.io/images/annapic.png' alt='anna' wrapped ui={false}/>
              <Card.Content>
                <Card.Header>Anna Campainha</Card.Header>
                <Card.Description>
                  This is a test.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='https://annacampainha.github.io/images/annapic.png' alt='anna' wrapped ui={false}/>
              <Card.Content>
                <Card.Header>Anna Campainha</Card.Header>
                <Card.Description>
                  This is a test.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image src='https://annacampainha.github.io/images/annapic.png' alt='anna' wrapped ui={false}/>
              <Card.Content>
                <Card.Header>Anna Campainha</Card.Header>
                <Card.Description>
                  This is a test.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

export default LandingCards;
