import { Meteor } from 'meteor/meteor';
import { Profiles } from '../../api/profile/Profiles';
/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addProfile(profile) {
  console.log(`  Adding: ${profile.username}`);
  Profiles.collection.insert(profile);
}

/** Initialize the Profiles collection if empty. */
if (Profiles.collection.find().count() === 0) {
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfiles.map(profile => addProfile(profile));
  } else {
    console.log('profiles collection is empty!');
  }
}
