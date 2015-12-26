Meteor.publish('employees', function() {
  return Employees.find({active: true});
});

Meteor.publish('reviews', function() {
  return Reviews.find();
});