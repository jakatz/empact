Template.profile.rendered = function() {
  $("#datepicker").datepicker({
    format: "mm-yyyy",
    viewMode: "months",
    minViewMode: "months"
  });
};

Template.profile.events({
  'submit form': function(e) {
    e.preventDefault();

    var firstName = e.target.firstName.value,
        lastName = e.target.lastName.value,
        joinDate = e.target.joinDate.value,
        squad = e.target.squad.value,
        email = Meteor.user().emails[0].address;

    // Create a new Employee
    Meteor.call('addEmployee', firstName, lastName, email, joinDate, squad);

    // Mark user as having created an employee profile
    Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.created_profile": true}});
  }
});