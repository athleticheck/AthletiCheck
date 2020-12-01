import React from 'react';
import { Header, Image, Grid, Container, Icon } from 'semantic-ui-react';

const bioStyle = { width: '20%' };
const imgStyle = { paddingLeft: 10 };
export default class AboutUs extends React.Component {

  render() {
    const divStyle = {
      paddingTop: '10px',
      color: 'white',
    };
    return (
        <div className="about-us-main-background">
        <Container>
            <Header as='h1' style={divStyle} textAlign="center" size="huge" className='about-welcome' > ABOUT US </Header>
            <hr />
          <div className="about-us-container">
            <div className="about-us-background">
              <Image floated='left' size='large' style={imgStyle} src='https://www.khon2.com/wp-content/uploads/sites/8/2020/07/UH-door.jpg?w=1360&h=815&crop=1' />
           <div className='about-aboutus'>
             <Header textAlign='center' > We are AthletiCheck</Header>
             <p>At AthletiCheck, we want to solve the biggest problem within athletic programs: <b> complicated record systems for athletes and athletic trainers.</b> </p>
            <p>Athletic programs need a user friendly interface that is easily accessible by athletic trainers in order to reach their athletes effectively.
              There needs to be an ultimate solution to reduce time spent on documentation. Athletes need a comprehensive history of each visit with their trainer to reference. </p>
            <p>The solution to this problem is <strong>AthletiCheck</strong>, a website that creates an easy-to-use record system targeted at both the athletes and their trainers.</p>
           </div>
            </div>
            <div className="our-team-background">
            <Header as='h1' textAlign="center" size="huge" className='about-welcome' > <u> OUR TEAM </u> </Header>
              <Grid stackable columns={4} centered>
                  <Grid.Column style={bioStyle}>
                    <Image src='../images/franz.jpg' size='medium' circular/>
                    <div className="name-bio-aboutus">
                    <Header textAlign='center'>FRANZ ADAMS</Header>
                    <a href = "mailto: fadam@hawaii.edu"> <Icon name='mail' />Email Franz</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='../images/robert.png' size='medium' circular/>
                    <div className="name-bio-aboutus">
                    <Header textAlign='center'>ROBERT LEMON</Header>
                    <a href = "mailto: rlemon@hawaii.edu"><Icon name='mail' />Email Robert</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='../images/andy.jpg' size='medium' circular/>
                    <div className="name-bio-aboutus">
                    <Header textAlign='center'>ANDY YU</Header>
                    <a href = "mailto: andyyu@hawaii.edu"><Icon name='mail' />Email Andy</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column style={bioStyle}>
                    <Image src='https://annacampainha.github.io/images/annapic.png' size='medium' circular/>
                    <div className="name-bio-aboutus">
                    <Header textAlign='center'>ANNA CAMPAINHA</Header>
                    <a href = "mailto: ac62@hawaii.edu"><Icon name='mail' />Email Anna</a>
                    </div>
                  </Grid.Column>
              </Grid>
            </div>
          </div>
        </Container>
        </div>
    );
  }
}
