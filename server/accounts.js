// Accounts.config({ restrictCreationByEmailDomain: 'vulcun.com' });

// Send email
// Accounts.config({
  // sendVerificationEmail: true
// });

// Temp Set Verified to True


// Set Admin
Meteor.startup(function() {
  var globalAdmin = Meteor.users.find({"emails.address": "jonathan@vulcun.com"}).fetch()[0];

  if (globalAdmin) {
    Roles.setUserRoles(globalAdmin._id, 'admin', Roles.GLOBAL_GROUP);
  }
});

// Add Profiles