import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Profiles } from '../../api/profile/Profiles';
// import { Visits } from '../../api/visit/Visits';
// import { Comments } from '../../api/comment/Comments';

/* eslint-disable no-console */

// Sample Collections ===================================================

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Our Collectsions ======================================================

/** Initialize the database with a default data document. */
function addProfile(profile) {
  console.log(`  Adding: ${profile.userId}`);
  Profiles.collection.insert(profile);
}

// function addVisit(visit) {
//   console.log(`  Adding: ${visit.profileID}`);
//   Visits.collection.insert(visit);
// }
//
// function addComment(comment) {
//   console.log(`  Adding: ${comment.visitID}`);
//   Comments.collection.insert(comment);
// }

/** Initialize the Profiles collection if empty. */
if (Profiles.collection.find().count() === 0) {
  console.log('profiles collection is empty!');
  if (Meteor.settings.defaultProfiles) {
    console.log('Creating default profiles.');
    Meteor.settings.defaultProfiles.map(profile => addProfile(profile));
  }
}

// /** Initialize the Visits collection if empty. */
// if (Visits.collection.find().count() === 0) {
//   console.log('visits collection is empty!');
//   if (Meteor.settings.defaultVisits) {
//     console.log('Creating default visits.');
//     Meteor.settings.defaultVisits.map(visit => addVisit(visit));
//   }
// }
//
// /** Initialize the Comments collection if empty. */
// if (Comments.collection.find().count() === 0) {
//   console.log('comments collection is empty!');
//   if (Meteor.settings.defaultComments) {
//     console.log('Creating default comments.');
//     Meteor.settings.defaultComments.map(comment => addComment(comment));
//   }
// }
