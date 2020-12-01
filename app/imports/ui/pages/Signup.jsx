import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Profiles } from '../../api/profile/Profiles';
import swal from 'sweetalert';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '', password: '', error: '', redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { firstName, lastName, email, password } = this.state; // firstName, lastName
    Accounts.createUser({ firstName, lastName, email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
    const userId = Meteor.users.findOne({ username: email }).userId;
    const temp = "change-me!";

    Profiles.collection.insert({ userId, firstName, lastName},
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Profile added successfully', 'success');
            formRef.reset();
          }
        });
    // grab userId of newly created user
    // create a new profile for that user
    //  - userId, firstName, lastName filled in.  everything else blank
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/profile' } }; // inform athlete to contact trainer!!!
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <Container id="signup-page" className='element-under-nav-container'>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Image src='/images/circular-logo.png' size='small' centered/>
              <Header as='h2' color='black' textAlign='center' inverted>
                Register New Account
              </Header>
              <Form onSubmit={this.submit}>
                <Segment stacked>
                  <Form.Input
                      label="First Name"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="firstName"
                      placeholder="First Name"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Last Name"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="lastName"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                  />

                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button className="signup-form-submit" content="Submit"/>
                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
