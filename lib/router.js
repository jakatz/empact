// Config
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('employees'), Meteor.subscribe('reviews')];
  }
});

// Employee Routes
Router.route('/', {name: 'employeesList'});
Router.route('/employees/:_id', {
  name: 'employeePage',
  data: function() { return Employees.findOne(this.params._id); }
});

// Review Routes
Router.route('/reviews', {name: 'reviewsList'});
Router.route('/reviews/:_id', {
  name: 'reviewPage',
  data: function() { return Reviews.findOne(this.params._id); }
});

Router.route('/submit', {
  name: 'reviewsSubmit'
});

// Misc Routes
Router.route('/submitted', {name: 'submittedPage'});

// Utilities
Router.onBeforeAction('dataNotFound', {only: ['employeePage', 'reviewPage']});