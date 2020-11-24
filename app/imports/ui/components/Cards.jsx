import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Cards extends React.Component {
  render() {
    return (
        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              <Image src='/images/bubbles.png' />
              <p> SOMETHING SHOULD APPEAR</p>
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/signup.png' />
              <p> SOMETHING SHOULD APPEAR</p>
            </Grid.Column>
            <Grid.Column>
              <Image src='/images/visits-two.png' />
              <p> SOMETHING SHOULD APPEAR</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          );
  }
}

export default Cards;
