import React from 'react';
import { Button, Label, Container, Grid, Header, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const buttonStyle = { width: '100%' };
/** A simple static component to render some text for the landing page. */
class BottomLanding extends React.Component {
  render() {
    return (
          <Container className='boxes'>
            <Grid stackable columns={3}>
              <Grid.Row>
                <Grid.Column className="landing-grid">
                  <Icon size='massive' name='user circle' />
                    <Header as='h1' textAlign='center' inverted className="icon-headers">INTERACTIVE PROFILES</Header>
                  <Icon size='massive' name='mobile alternate' />
                    <Header as='h1' textAlign='center' inverted className="icon-headers">MOBILE FRIENDLY</Header>
                  <Icon size='massive' name='time' />
                    <Header as='h1' textAlign='center' inverted className="icon-headers">TIME SAVING</Header>
                </Grid.Column>
                <Grid.Column className="landing-grid">
                  <Image src='/images/signup.png' fluid as={NavLink} activeClassName="active"exact to="/about"/>
                  <Label size='massive' style={buttonStyle} color='black'>
                    <Button style={buttonStyle} size='small' inverted color='red'
                            as={NavLink} activeClassName="active"exact to="/about">
                      <Button.Content>
                        ABOUT US
                      </Button.Content>
                    </Button>
                  </Label>
                </Grid.Column>
                <Grid.Column className="landing-grid">
                  <Icon size='massive' name='history' />
                    <Header as='h1' textAlign='center' inverted className="icon-headers">HISTORY OF VISITS</Header>
                  <Icon size='massive' name='dna' />
                  <Header as='h1' textAlign='center' inverted className="icon-headers">PERSONALIZED RECORDS</Header>
                  <Icon size='massive' name='check circle' />
                  <Header as='h1' textAlign='center' inverted className="icon-headers">EASY TO USE</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    );
  }
}

export default BottomLanding;
