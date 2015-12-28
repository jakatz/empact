Template.reviewsSubmit.helpers({
  employees: function() {
    return Employees.find();
  }
});

Template.reviewsSubmit.events({
  'submit form': function(e) {
    console.log("form submitted");
    e.preventDefault();
    console.log('form submitted');

    var review = {
      submitted_by: Meteor.user()
    };

    review._id = Reviews.insert(review);
    Router.go('submittedPage');
  }
});