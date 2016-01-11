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

  'getAverage': function(weekly_ratings) {
    var sum = _.reduce(weekly_ratings, function(total, n) {
      if (n.rating) {
        return total + parseInt(n.rating);
      } else { return total }
    }, 0);

    if (sum !== 0) {
      return sum/weekly_ratings.length;
    } else { return 0; }
  },

  'setAdmin': function() {
    Meteor.users.update({ _id: Meteor.userId() }, { $set: {'roles': ['admin']}});
  },

  'getWeek': function() {
    return Weeks.findOne().currentWeek;
  },

  'updateWeek': function() {
    var lastWeek = Weeks.findOne();
    Weeks.update(lastWeek, {$inc: {currentWeek: 1}});

    return lastWeek.currentWeek + 1;
  },

  'compileReviews': function(searchObject) {
    var week = Meteor.call('getWeek');
    weekly_ratings = [];

    for (var i = 1; i <= week; i++) {
      searchObject.week = i;
      var temp = Reviews.find(searchObject).fetch();
      weekly_ratings.push(Meteor.call('getAverage', temp));
      console.log(searchObject);
      console.log("----------------");
      console.log(temp);
    }


    return weekly_ratings;
  },

  'getMetric': function(userId) {
    var employee = Employees.findOne({user_id: userId});
    var userAverages = Meteor.call('compileReviews', { sucker: employee._id });
    var companyAverages = Meteor.call('compileReviews', {});
    var squadAverages = Meteor.call('compileReviews', { squad: employee.squad });

    // product_ratings = Meteor.call('compileReviews', { product: })
    var averages = _.map(companyAverages, function(val, i) {
      var a = {};
      a.week = i + 1;
      a.userAverage = userAverages[i];
      a.companyAverage = companyAverages[i];
      a.squadAverages = squadAverages[i];
      a.reviewCount = Reviews.find({"sucker": employee._id, "week": a.week}).fetch().length;

      return a;
    });

    return averages;
  }
});