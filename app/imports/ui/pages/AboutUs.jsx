import React from 'react';
import { Header, Image, Grid, Container } from 'semantic-ui-react';

const bioStyle = { width: '20%' };
export default class AboutUs extends React.Component {

  render() {
    const divStyle = {
      paddingTop: '10px',
      color: 'white',
    };
    return (
        <Container>
            <Header as='h1' style={divStyle} textAlign="center" size="huge" className='about-welcome' > WELCOME </Header>
            <hr />
            <Header as='h2' style={divStyle} textAlign="center" size="medium">We are AthletiCheck, providing you with the most efficient way to manage Athletes.</Header>
          <div className="about-us-container">
            <Header as='h1' textAlign="center" size="huge" className='about-welcome' > <u> OUR TEAM </u> </Header>
              <Grid columns={4} centered>
                  <Grid.Column style={bioStyle}>
                    <Image src='../images/franz.jpg' size='medium' circular/>
                    <Header textAlign='center'>FRANZ ADAMS</Header>
                    <p textalign="center">franzadam@gmail.com</p>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='https://robert-lemon-uhm.github.io/images/SquarePic.png' size='medium' circular/>
                    <Header textAlign='center'>ROBERT LEMON</Header>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='https://andyyu824.github.io/images/andyyu.jpg' size='medium' circular/>
                    <Header textAlign='center'>ANDY YU</Header>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='https://annacampainha.github.io/images/annapic.png' size='medium' circular/>
                    <Header textAlign='center'>ANNA CAMPAINHA</Header>
                  </Grid.Column>
              </Grid>
            </div>
        </Container>
    );
  }
}
