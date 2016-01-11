Meteor.publish('employees', function() {
  return Employees.find();
});

Meteor.publish('reviews', function() {
  return Reviews.find();
});

Meteor.publish('weeks', function() {
  return Weeks.find();
});

Meteor.publish('averages', function() {
  Averages.find();
  this.ready();
});