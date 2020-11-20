import React from 'react';
import { Container, Divider, Header, Image, Table, TableRow } from 'semantic-ui-react';

/** Renders the Page for adding a document. */
class ProfileList extends React.Component {

  /** Render the Profile page */
  render() {
    return (
        <Container>
          <Divider hidden/>
          <Table size='large' celled padded striped stackable singleLine>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell colSpan='7' textAlign='center'>
                  <Header>Profile List</Header>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell textAlign='center'>Athlete</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Sport</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Major</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign='center'>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini'/>
                    <Header.Content>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Smith</Table.Cell>
                <Table.Cell>Lana</Table.Cell>
                <Table.Cell>Soccer</Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>Communications</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                    <Header.Content>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Adams</Table.Cell>
                <Table.Cell>Sam</Table.Cell>
                <Table.Cell>Football</Table.Cell>
                <Table.Cell>24</Table.Cell>
                <Table.Cell>4</Table.Cell>
                <Table.Cell>Mathematics</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                    <Header.Content>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Johnson</Table.Cell>
                <Table.Cell>Carrie</Table.Cell>
                <Table.Cell>Volleyball</Table.Cell>
                <Table.Cell>22</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Biochemistry</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell textAlign='center'>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                    <Header.Content>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Smith</Table.Cell>
                <Table.Cell>Craig</Table.Cell>
                <Table.Cell>Basketball</Table.Cell>
                <Table.Cell>22</Table.Cell>
                <Table.Cell>3</Table.Cell>
                <Table.Cell>Computer Science</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Divider hidden/>
        </Container>
    );
  }
}

export default ProfileList;
