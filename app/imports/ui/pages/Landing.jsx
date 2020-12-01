import React from 'react';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import BottomLanding from '../components/BottomLanding';

const menuStyle = { height: '500px' };
// const buttonStyle = { width: '100%' };
const transLogo = '../images/bigger-circle.png';
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
                  <Header className="logo-description" inverted> Welcome to the easiest system for Athletic Trainers and Athletes to communicate and thrive at all collegiate levels. </Header>
                  <Button size='small' inverted as={NavLink} activeClassName="active"exact to="/signup"> Give AthletiCheck a try, its free.</Button>
                  <div>
                    <Button size='small' inverted as={NavLink} activeClassName="active"exact to="/about"> Read more about us.</Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <Container className='boxes'>
          <BottomLanding />
          </Container>
        </div>
    );
  }
}

export default Landing;
