Template.employeesList.helpers({
  employees: function() {
    return Employees.find();
  }
});

Template.employeesList.events({
});