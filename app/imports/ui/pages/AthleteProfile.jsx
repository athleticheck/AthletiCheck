import React from 'react';
import { Container, Table, Card, Image, Header, Grid, Divider } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class AthleteProfile extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <Container className='profile-page-container'>
          <Card fluid centered>
            <Card.Content textAlign='center'>
              <Grid columns={2} stackable divided>
                <Grid.Column>
                  <Image centered size='medium' rounded
                         src="https://www.ics.hawaii.edu/wp-content/uploads/2018/08/peter-sadowski_300x300.jpg"/>
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
          </Card>
          <Divider horizontal>
            <Header as='h1' textAlign='center' inverted>VISITS</Header>
          </Divider>
          No visits! (make a &quot;no visits&quot; comment/card by default)
        </Container>
    );
  }
}

export default AthleteProfile;
