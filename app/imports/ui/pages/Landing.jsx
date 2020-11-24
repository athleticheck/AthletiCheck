import React from 'react';
import { Button, Label, Container, Grid, Header, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const menuStyle = { height: '500px' };
const buttonStyle = { width: '290px' };
const transLogo = '../images/circular-logo.png';
// const create = '../images/create.png';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className='background-landing'>
            <Grid container stackable columns={3} verticalAlign="top" textAlign="center" style={menuStyle}>
              <Grid.Row>
                <Grid.Column>
                  <Image centered src={transLogo} size='large' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Container className='boxes'>
          <Grid stackable columns='three'>
            <Grid.Row>
              <Grid.Column>
                <Image src='/images/twousers.png' />
                <Label size='massive' style={buttonStyle} color='black'>
                  <Header as='h1' textAlign='center' inverted className="box-headers">ITERACTIVE PROFILES</Header>
                </Label>
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/signup.png' />
                <Button style={buttonStyle} size='massive' color='black'
                        as={NavLink} activeClassName="active"exact to="/about">
                  <Button.Content>
                    ABOUT US
                  </Button.Content>
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/user-profile.png' />
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
