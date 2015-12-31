Template.employeesList.helpers({
  employees: function() {
    return Employees.find();
  }
});

Template.employeesList.events({
  'click #add-employee': function() {
    Meteor.call('addEmployee', "jon", "jon@jon.com", "Dec 1, 2015", "Vulcun");
  },

  'click #add-review': function() {
    Meteor.call('addReview', 1, "DJ", "Vulcun");
  }
});