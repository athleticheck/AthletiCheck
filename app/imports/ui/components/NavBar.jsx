import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image, Popup } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

const cornerLogo = '../images/useme.png';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginRight: '0px', marginBottom: '13px' };
    return (
      <Menu size='massive' style={menuStyle} attached="top" borderless stackable>
        <Menu.Item as={NavLink} activeClassName="" exact to="/"><Image src={cornerLogo} size='small' />
        </Menu.Item>
      {this.props.currentUser && !Roles.userIsInRole(Meteor.userId(), 'admin') ? ([<Menu.Item as={NavLink}
        activeClassName="active" exact to="/profile" key='profile'>My Profile</Menu.Item>,
            <Popup key='popup' content='DO NOT FILL THIS FORM OUT. IT IS THE REAL UH COVID FORM.'
            trigger={ <Menu.Item as='a' target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSdeC4vggGnSE4inATxnOSFc41FsDpuk42gcblPQ17AW_86FOw/viewform?vc=0&c=0&w=1'
                                 key='googleform'>COVID Form</Menu.Item>} />]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/profile-list" key='profilelist'>Profile List</Menu.Item>]
          ) : ''}
        {/** ------RIGHT SIDE OF NAVBAR----- */}
        {this.props.currentUser === '' ? (
            <Menu.Item position="right"> {/* zero padding!!! */}
              <Menu secondary stackable id="right-nav-bar">
                <Menu.Item name='Join' as={NavLink} exact to="/signup" content='JOIN'/>
                <Menu.Item name='Signin' as={NavLink} exact to="/signin" content='SIGN IN'/>
              </Menu>
            </Menu.Item>
        ) : (
            <Menu.Item position='right'>
              <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
            </Menu.Item>
        )}
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
