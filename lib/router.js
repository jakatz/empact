Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('employees'); }
});

Router.route('/', {name: 'employeesList'});