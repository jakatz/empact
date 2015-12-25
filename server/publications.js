Meteor.publish('employees', function() {
  return Employees.find();
});