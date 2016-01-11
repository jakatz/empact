// Config
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('employees'), Meteor.subscribe('reviews', {sucker: Meteor.userId()})];
  }
});

Router.onBeforeAction(function() {
  if (Meteor.loggingIn()) {
    this.render('loading');
  } else if (!Meteor.user()) {
    this.render('index');
  } else if (Meteor.user() && !Meteor.user().emails[0].verified) {
    this.render("verification");
  } else if (Meteor.user() && Meteor.user().emails[0].verified && !Meteor.user().profile.created_profile) {
    this.render("profile");
  } else {
    this.next();
  }
});

Router.route('/', {name: 'index'});

// Employee Routes
Router.route('/employees', {
  name: 'employeesList'
});

Router.route('/employees/:_id', {
  name: 'employeePage',
  data: function() {
    return Employees.findOne(this.params._id);
  }
});

// Review Routes
Router.route('/reviewslist', {
  name: 'reviewsList',
  data: function() {
    var currentUser = Meteor.userId();
    return Reviews.find({"sucker": currentUser});
  }
});

Router.route('/employees/:_id/reviews', {
  name: 'reviewsList',
  data: function() {
    var currentUser = Employees.findOne(this.params._id);
    return Reviews.find({"sucker": currentUser._id});
  }
});

Router.route('/submit', { name: 'reviewsSubmit' });

// Misc Routes
Router.route('/submitted', {name: 'submittedPage'});

// Utilities
Router.onBeforeAction('dataNotFound', {only: ['employeePage', 'reviewPage']});