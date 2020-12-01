import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { signupPage } from './signup.page';
import { aboutUsPage } from './aboutUs.page';
import { addVisitPage } from './addVisit.page';
import { adminProfilePage } from './adminProfile.page';
import { profilePage } from './profile.page';
import { editProfilePage } from './editProfile.page';
import { profileListPage } from './profileList.page';

/* global fixture:false, test:false */

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that --landing-- page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that --Sign In-- page shows up', async (testController) => {
  await signinPage.isDisplayed(testController);
});

test('Test that --Sign Up-- page shows up', async (testController) => {
  await signupPage.isDisplayed(testController);
});

test('Test that --Sign Out-- page shows up', async (testController) => {
  await signoutPage.isDisplayed(testController);
});

test('Test that --About Us-- page shows up', async (testController) => {
  await aboutUsPage.isDisplayed(testController);
});

test('Test that --Add Visit-- page shows up', async (testController) => {
  await addVisitPage.isDisplayed(testController);
});

test('Test that --Admin Profile-- page shows up', async (testController) => {
  await adminProfilePage.isDisplayed(testController);
});

test('Test that --Profile-- page shows up', async (testController) => {
  await profilePage.isDisplayed(testController);
});

test('Test that --Edit Profile-- page shows up', async (testController) => {
  await editProfilePage.isDisplayed(testController);
});

test('Test that --Profile list-- page shows up', async (testController) => {
  await profileListPage.isDisplayed(testController);
});



