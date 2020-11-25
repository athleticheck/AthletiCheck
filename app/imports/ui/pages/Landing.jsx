import React from 'react';
import { Button, Label, Container, Grid, Header, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const menuStyle = { height: '500px' };
const buttonStyle = { width: '100%' };
// const transLogo = '../images/circular-logo.png';
const transLogo = '../images/bigger-circle.png';
// const create = '../images/create.png';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className='background-landing'>
            <Grid container columns={2} verticalAlign="middle" textAlign="center" style={menuStyle}>
              <Grid.Row>
                <Grid.Column>
                  <Image centered src={transLogo} size='large' />
                </Grid.Column>
                <Grid.Column>
                  <Header className="logo-description"> The easiest way for Athletic Trainers to manage athletes
                    at every collegiate level. </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Container className='boxes'>
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
                <Button style={buttonStyle} size='small' color='grey'
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
          </Container>
        </div>
    );
  }
}

export default Landing;
