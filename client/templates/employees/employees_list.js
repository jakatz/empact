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
    var current_employee = Meteor.userId();

    Meteor.call('addReview', 1, "DJ", "Vulcun", current_employee, 10);
  }
});