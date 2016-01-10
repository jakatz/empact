Meteor.publish('employees', function() {
  return Meteor.users.find();
});

Meteor.publish('reviews', function() {
  return Reviews.find();
});