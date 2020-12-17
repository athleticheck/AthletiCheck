import { landingPage} from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { profilePage } from './profile.page';
import { profileListPage } from './profileList.page';
import { aboutUsPage } from './aboutUs.page';
import { signupPage } from './signup.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

const credentialsAdmin = { username: 'admin@foo.com', password: 'changeme' };

fixture('AthletiCheck test with hard-coded db')
    .page('http://localhost:3000');

test('Test that --landing-- page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

/* This section below is for testing functionality for athletes slash general users*/

test('Testing signin and signout for general users', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Testing for aboutUs page to display', async (testController) => {
  await landingPage.gotoAboutUsPage(testController);
  await aboutUsPage.isDisplayed(testController);
});

test('Test that signup page, then logout works', async (testController) => {
  // Create a new user email address that's guaranteed to be unique.
  const newUser = `user-${new Date().getTime()}@foo.com`;
  await navBar.gotoSignupPage(testController);
  await signupPage.isDisplayed(testController);
  await signupPage.signupUser(testController, newUser, credentials.password);
  // New user has successfully logged in, so now let's logout.
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that Profile page works and shows up', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await profilePage.isDisplayed(testController);
  await navBar.logout(testController);
});

/* This section below is for testing functionality for ATs slash admins*/

test('Test that signin and signout works for admins/ATs', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await navBar.isLoggedIn(testController, credentialsAdmin.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Testing ProfileList page for admin', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await profileListPage.isDisplayed(testController);
  await navBar.logout(testController);
});

test('Test the ProfileList page to render table', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await profileListPage.hasTable(testController);
});

