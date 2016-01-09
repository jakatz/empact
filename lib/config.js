AdminConfig = {
  name: 'Project Impact',
  collections: {
    Employees: {},
    Reviews: {}
  }
};

Meteor.startup(function() {
  var user;
  if (Meteor.isServer) {
    user = Meteor.users.findOne();
    Meteor.users.upsert({
      _id: user._id
    }, {
      $set: {
        roles: ['admin']
      }
    });
    return console.log("make 1st user admin", user.roles);
  }
});