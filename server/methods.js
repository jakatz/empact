Meteor.methods({
  'sendEmail': function(to, subject, html) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // Don't allow sending email unless logged in
    if (!Meteor.user()) {
      throw new Meteor.Error(403, "not logged in");
    }

    SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

    var emailData = {
      name: "Jon Katz",
      favoriteRestaurant: "YUM",
      bestFriend: "Yo mama"
    };

    var employees = 'employees';

    Email.send({
      to: to,
      from: 'ProjectImpact@vulcunimpact.meteor.com',
      subject: subject,
      html: SSR.render('htmlEmail', emailData)
    });
  },

  'validateEmailAddress': function(address) {
    check(address, String);
  },

  'addEmployee': function(firstName, lastName, email, joinDate, squad) {
    Employees.insert({
      first_name: firstName,
      last_name: lastName,
      email: email,
      join_date: joinDate,
      squad: squad,
      created_on: new Date(),
      user_id: Meteor.userId()
    });
  },

  'addReviews': function(reviews) {
    reviews.forEach(function(review) {
      Reviews.insert(review);
    });
  },

  'getAverage': function(employee_id) {
    var employee_reviews = [Reviews.find({sucker: current_employee}).fetch()];
    var total = 0;

    return employee_reviews;
  },

  'setAdmin': function() {
    Meteor.users.update({ _id: Meteor.userId() }, { $set: {'roles': ['admin']}});
  },

  'getWeek': function() {
    return new moment().diff(moment("12-24-2015", "MM-DD-YYYY"), 'weeks');
  },

  'compileReviews': function(userId) {
    var currentWeek = Meteor.call('getWeek'),
        weekly_ratings = Reviews.find({"sucker": userId, "week": currentWeek}).fetch();

    return weekly_ratings;
  },

  'getMetrics': function() {
  }
});