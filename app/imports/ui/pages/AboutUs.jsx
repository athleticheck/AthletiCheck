import React from 'react';
import { Header, Image, Grid, Container, Segment } from 'semantic-ui-react';

export default class AboutUs extends React.Component {

  render() {
    const divStyle = {
      paddingTop: '15px',
      color: 'white',
    };
    return (
        <Container>
            <Header as='h1' style={divStyle} textAlign="center" size="huge" className='about-welcome'> WELCOME </Header>
            <Header as='h2' textAlign="center" size="medium">We are AthletiCheck, providing you with the most efficient way to manage Athletes.</Header>
          <Grid>
            <Grid.Column className="about-description">
              <Segment inverted>Inverted content.
              <Header>second half thats below</Header>
              </Segment>
            </Grid.Column>
          </Grid>
          <div className="aboutus-bios">
          <Grid colums={2}>
            <Grid.Row>
            <Grid.Column>
              <Image src='https://franzadam.github.io/images/MeTi.jpg' />
              <Header>FRANZ ADAMS</Header>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://robert-lemon-uhm.github.io/images/SquarePic.png' />
              <Header>ROBERT LEMON</Header>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image src='https://andyyu824.github.io/images/andyyu.jpg' />
                <Header>ANDY YU</Header>
              </Grid.Column>
              <Grid.Column>
                <Image src='https://annacampainha.github.io/images/annapic.png' />
                <Header>ANNA CAMPAINHA</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
        </Container>
    );
  }
}
