import React from 'react';
/* import { Meteor } from 'meteor/meteor'; */
import { Dropdown, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
/* import { withRouter, NavLink } from 'react-router-dom'; */
/* import { withTracker } from 'meteor/react-meteor-data'; */
/* import PropTypes from 'prop-types'; */

class MiddleMenu extends React.Component {
  render() {
    return (
          <Menu borderless className="middlemenu">
            <Menu.Item position="right">
              <Menu.Item name='JOIN' as={NavLink} exact to="/signup"> JOIN </Menu.Item>
            <Menu.Item name='LOGIN' as={NavLink} exact to="/signin"> LOGIN </Menu.Item>
            <Menu.Item name="about" as={NavLink} exact to="/signin"> ABOUT US </Menu.Item>
            </Menu.Item>
          </Menu>
    );
  }
}

export default MiddleMenu;
