Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('employees'); }
});

Router.route('/', {name: 'employeesList'});
Router.route('/employees/:_id', {
  name: 'employeePage',
  data: function() { return Employees.findOne(this.params._id); }
});

Router.route('/review', {name: 'reviewsSubmit'});
Router.route('/submitted', {name: 'submittedPage'});

Router.onBeforeAction('dataNotFound', {only: 'employeePage'});