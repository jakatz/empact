Accounts.onCreateUser(function(options, user) {
  Meteor.users.update(
    user, {$set: {roles: ['admin']}}
  );

  return user;
});