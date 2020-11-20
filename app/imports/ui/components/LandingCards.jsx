import React from 'react';
import { Table, Card, Image, Header, Grid } from 'semantic-ui-react';

class LandingCards extends React.Component {

  render() {
    return (
        <Card.Content textAlign='center'>
          <Grid columns={2} stackable divided>
            <Grid.Column>
              <Image centered size='medium' rounded
                     src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1432963427/ix9o22ihyxifmqdpr3ue.png"/>
            </Grid.Column>
            <Grid.Column>
              <Header as='h1' textAlign='center' attached='top' inverted>
                Peter Sadowski
              </Header>
              <Table singleLine stackable inverted attached>
                <Table.Body>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Sport</Table.HeaderCell>
                    <Table.Cell>Football</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.Cell>21</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Height</Table.HeaderCell>
                    <Table.Cell>6&apos;5</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Weight</Table.HeaderCell>
                    <Table.Cell>200 lbs</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Graduation</Table.HeaderCell>
                    <Table.Cell>2022</Table.Cell>
                  </Table.Row>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell>Major</Table.HeaderCell>
                    <Table.Cell>Communications</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Card.Content>
    );
  }
}

export default LandingCards;
