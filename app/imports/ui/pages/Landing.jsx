import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const menuStyle = { height: '500px' };
const transLogo = '../images/circular-logo.png';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='background-landing'>
          <Grid container stackable verticalAlign="top" textAlign="center" style={menuStyle}>
            <Grid.Row>
              <Grid.Column>
                <Image centered src={transLogo} size='large' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default Landing;
