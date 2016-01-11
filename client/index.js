Template.index.helpers({
  isVerifiedUser: function() {
    return Meteor.user().emails[0].verified;
  },
  employee: function() {
    return Employees.findOne({"user_id": Meteor.userId()});
  }
});