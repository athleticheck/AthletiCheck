import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div className="ui center aligned container">
      <Header id="signout-page" as="h2" textAlign="center" inverted>
        <p>you have successfully signed out of AthletiCheck</p>
      </Header>
          <Button
                  as={NavLink} activeClassName="active"exact to="/signin">
            <Button.Content>
              Click here to Sign In
            </Button.Content>
          </Button>
            <Button id="signout-HomePage"
                  as={NavLink} activeClassName="active"exact to="/">
            <Button.Content>
              Click here to go Home
            </Button.Content>
          </Button>
        </div>
    );
  }
}
