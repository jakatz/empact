Meteor.startup(function() {
  if(!Weeks.find().count()) {
    Weeks.insert({currentWeek: 1});
  }
});