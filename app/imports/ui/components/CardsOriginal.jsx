import React from 'react';
import { Button, Card, Container, Grid, Header, Image, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class CardsOriginal extends React.Component {
  render() {
    return (
        <Grid stackable columns={3}>
          <Grid.Row>
            <Grid.Column className="landing-image">
              <Image src='/images/twousers.png' fluid />
              <Label size='massive' style={buttonStyle} color='black'>
                <Header as='h1' textAlign='center' inverted className="box-headers">INTERACTIVE PROFILES</Header>
              </Label>
            </Grid.Column>
            <Grid.Column className="landing-image">
              <Image src='/images/signup.png' fluid/>
              <Label size='massive' style={buttonStyle} color='black'>
                <Button style={buttonStyle} size='small' inverted color='red'
                        as={NavLink} activeClassName="active"exact to="/about">
                  <Button.Content>
                    ABOUT US
                  </Button.Content>
                </Button>
              </Label>
            </Grid.Column>
            <Grid.Column className="landing-image">
              <Image src='/images/user-profile.png' fluid />
              <Label size='massive' style={buttonStyle} color='black'>
                <Header as='h1' textAlign='center' inverted className="box-headers">HISTORY OF VISITS</Header>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          );
  }
}

export default CardsOriginal;
