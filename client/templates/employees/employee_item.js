Template.employeeItem.helpers({
  average: function() {
    current_user = Meteor.userId();
    console.log(current_user);
  }
});