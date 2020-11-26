import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Button } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div className="ui center aligned container">
      <Header id="signout-page" as="h2" textAlign="center" inverted>
        <p>you have successfully signed out of AthletiCheck</p>
      </Header>
          <Button> <Link as={NavLink} activeClassName="" exact to="/signin">Click here to Sign In</Link> </Button>
          <Button> <Link as={NavLink} activeClassName="" exact to="/">Click here to go Home</Link> </Button>
        </div>
    );
  }
}
