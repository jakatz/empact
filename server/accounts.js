// Accounts.config({ restrictCreationByEmailDomain: 'vulcun.com' });

Meteor.startup(function() {
  var globalAdmin = Meteor.users.find({"emails.address": "jonathan@vulcun.com"}).fetch()[0];
  Roles.setUserRoles(globalAdmin._id, 'admin', Roles.GLOBAL_GROUP);
});