import React from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';

const backgroundImage = '../images/officialBackground.png';
const menuStyle = { size: '205px 300px' };
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='background-landing'>
          <Image src={backgroundImage} fluid/>
          <Grid verticalAlign='middle' textAlign='center'>
            <Grid.Column width={4} id='landing-grid' color='red' style={menuStyle}>
              <Icon name='users' size='huge' />
              <h1>Athlete Details</h1>
              <h3>This platform allows a list of Athletes at your hands.</h3>
            </Grid.Column>
            <Grid.Column width={4} id='landing-grid' color='red' style={menuStyle}>
              <Icon name='file alternate' size='huge' />
              <h1>Communication</h1>
              <h3>For each contact, you can save their sport, name, number, age, weight, height and major.</h3>
            </Grid.Column>
            <Grid.Column width={4} id='landing-grid' color='red' style={menuStyle}>
              <Icon name='calendar check' size='huge' />
              <h1>Timestamped Notes</h1>
              <h3>Each time you visit with an Athlete, you can write notes to summarize the visit.</h3>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default Landing;
