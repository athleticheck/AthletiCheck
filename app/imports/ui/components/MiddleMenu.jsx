import React from 'react';
/* import { Meteor } from 'meteor/meteor'; */
import { Menu, Image } from 'semantic-ui-react';
/* import { withRouter, NavLink } from 'react-router-dom'; */
/* import { withTracker } from 'meteor/react-meteor-data'; */
/* import PropTypes from 'prop-types'; */

const smallLogo = '../images/smallLogo.png';

class MiddleMenu extends React.Component {
  render() {
    return (
          <Menu borderless className="middlemenu">
            <Menu.Item position="left">
              <Image src={smallLogo} size='small'/>
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item name='JOIN'> JOIN </Menu.Item>
            <Menu.Item name='LOGIN'> LOGIN </Menu.Item>
            <Menu.Item name="about"> ABOUT US </Menu.Item>
            </Menu.Item>
          </Menu>
    );
  }
}

export default MiddleMenu;
