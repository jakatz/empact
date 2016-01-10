Meteor.publish('employees', function() {
  return Employees.find();
});

Meteor.publish('reviews', function() {
  return Reviews.find();
});