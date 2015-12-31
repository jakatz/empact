Template.reviewsSubmit.helpers({
  employees: function() {
    return Employees.find();
  }
});

Template.reviewsSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var comments = e.target.reviewFeedback;
    var reviews = [];

    for (var i = 0; i < comments.length; i++) {
      console.log(comments[i].value);

      reviews.push({
        week: 1,
        user_average: 1,
        review_count: 1,
        product_name: "Vulcun",
        product_average: 1,
        company_average: 1
      });

      console.log(reviews);
    }

    // var review = {
    //   submitted_by: Meteor.user()
    // };

    // review._id = Reviews.insert(review);
    Router.go('submittedPage');
  }
});