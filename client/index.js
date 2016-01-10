Template.index.rendered = function() {
  $("#datepicker").datepicker({
    format: "mm-yyyy",
    viewMode: "months",
    minViewMode: "months"
  });
};

Template.index.events({
  'submit form': function(e) {
    e.preventDefault();

    var firstName = e.target.firstName.value,
        lastName = e.target.lastName.value,
        joinDate = e.target.joinDate.value,
        squad = e.target.squad.value,
        email = Meteor.user().emails[0].address;

    Meteor.call('addEmployee', firstName, lastName, email, joinDate, squad);
  }
});

Template.index.helpers({
  isVerifiedUser: function() {
    return Meteor.user().emails[0].verified;
  }
});