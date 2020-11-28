import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Profiles } from '../../api/profile/Profiles';
import { Visits } from '../../api/visit/Visits';
import { Comments } from '../../api/comment/Comments';

/** User-level publication. */
// If logged in, then publish Stuffs documents owned by this user. Otherwise publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// If logged in, then publish Profiles documents owned by this user. Otherwise publish nothing.
Meteor.publish(Profiles.userPublicationName, function () {
  if (this.userId) {
    return Profiles.collection.findOne({ userId: this.userId });
  }
  return this.ready();
});

// If logged in, then publish Visits documents owned by this user. Otherwise publish nothing.
Meteor.publish(Visits.userPublicationName, function () {
  if (this.userId) {
    const profileId = Profiles.findOne({ userId: this.userId });
    return Visits.collection.find({ profileId: profileId });
  }
  return this.ready();
});

// If logged in, then publish Comments documents owned by this user. Otherwise publish nothing.
Meteor.publish(Comments.userPublicationName, function () {
  if (this.userId) {
    const profileId = Profiles.findOne({ userId: this.userId });
    const visitIds = Visits.find({ profileId: profileId });
    const comments = [];
    // _.each(visitId, (visit) => { comments.concat(Comments.collection.find({ visitId: visit })); });
    visitIds.forEach((visit) => { comments.concat(Comments.collection.find({ visitId: visit })); });
    return comments;
  }
  return this.ready();
});

/** Admin-level publication. */
// If logged in and with admin role, then publish all Stuffs documents from all users. Otherwise publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all Profiles documents from all users. Otherwise publish nothing.
Meteor.publish(Profiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Profiles.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all Visits documents from all users. Otherwise publish nothing.
Meteor.publish(Visits.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Visits.collection.find();
  }
  return this.ready();
});

// If logged in and with admin role, then publish all Comments documents from all users. Otherwise publish nothing.
Meteor.publish(Comments.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Comments.collection.find();
  }
  return this.ready();
});

/** alanning:roles publication */
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
