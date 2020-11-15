import React from 'react';
import { Container, Header, Table } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class AthleteProfile extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <Container className="profile-page-container">
          <Header as="h1" textAlign="center" inverted>
            Firstname Lastname
          </Header>
          <Table singleLine unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={3}>Sport</Table.HeaderCell>
                <Table.HeaderCell width={2}>Age</Table.HeaderCell>
                <Table.HeaderCell width={2}>Height</Table.HeaderCell>
                <Table.HeaderCell width={2}>Weight</Table.HeaderCell>
                <Table.HeaderCell width={2}>Graduation</Table.HeaderCell>
                <Table.HeaderCell width={4}>Major</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Football</Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>6&apos;1</Table.Cell>
                <Table.Cell>200 lbs</Table.Cell>
                <Table.Cell>2021</Table.Cell>
                <Table.Cell>Communication</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

export default AthleteProfile;
