import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
/* RE-USED IMPORTS */
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import NotFound from '../pages/NotFound';
/* NEW IMPORTS */
import AthleteProfile from '../pages/AthleteProfile';
import AdminAthleteProfile from '../pages/AdminAthleteProfile';
import EditProfile from '../pages/EditProfile';
import AddVisit from '../pages/AddVisit';
import ProfileList from '../pages/ProfileList';
import MiddleMenu from '../components/MiddleMenu';
/* OLD IMPORTS, DELETE BEFORE FINAL SUBMISSION */
import ListStuffOLD from '../pages/ListStuff';
import ListStuffAdminOLD from '../pages/ListStuffAdmin';
import AddStuffOLD from '../pages/AddStuff';
import EditStuffOLD from '../pages/EditStuff';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <NavBar/>                                                        {/* EDIT NavBar */}
            {/*<MiddleMenu/>*/}
            <Switch>
              {/* RE-USED PATHS */}
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/signout" component={Signout}/>                    {/* should be protected */}
              {/* NEW PATHS */}
              <Route path="/profile" component={AthleteProfile}/>             {/* should be protected */}
              <Route path="/admin-profile" component={AdminAthleteProfile}/>  {/* should be admin protected */}
              <Route path="/edit-profile" component={EditProfile}/>           {/* should be admin protected */}   {/* rename path to include _id */}
              <Route path="/add-visit" component={AddVisit}/>                 {/* should be admin protected */}
              <Route path="/profile-list" component={ProfileList}/>           {/* should be admin protected */}
              {/* OLD PATHS, DELETE BEFORE FINAL SUBMISSION */}
              <ProtectedRoute path="/list" component={ListStuffOLD}/>
              <ProtectedRoute path="/add" component={AddStuffOLD}/>
              <ProtectedRoute path="/edit/:_id" component={EditStuffOLD}/>
              <AdminProtectedRoute path="/admin" component={ListStuffAdminOLD}/>
              {/* NEED TO EDIT NotFound PAGE */}
              <Route component={NotFound}/>                                    {/* EDIT NotFound */}
            </Switch>
            <Footer/>                                                          {/* EDIT Footer */}
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
