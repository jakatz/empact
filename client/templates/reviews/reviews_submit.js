Template.reviewsSubmit.helpers({
  employees: function() {
    var employees = []
    var index = 0;

    Employees.find().forEach(function(emp, i) {
      console.log(emp, i);
      emp.index = i;
      employees.push(emp)
    });

    return employees;
  },

});

Template.reviewsSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentUser = Meteor.userId();
    var review_html = $(e.target).find('.suckerName');
    var reviews = [];
    var week = new moment().diff(moment("12-24-2015", "MM-DD-YYYY"), 'weeks');

    console.log(week);

    for (var i = 0; i < review_html.length; i++) {
      reviews.push({
        submitted_by: currentUser,
        week: week,
        sucker: e.target['suckerID-' + i].value,
        rating: e.target['suckerRating-' + i].value,
        product: e.target.product.value,
        feedback: e.target['reviewFeedback-' + i].value
      });

      console.log(reviews);
    }

    Meteor.call('addReviews', reviews);
  }
});