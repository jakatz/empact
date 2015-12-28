Template.reviewsList.helpers({
  reviews: function() {
    return Reviews.find();
  }
});

Template.reviewsList.events({
  'click .submit-review': function() {
    console.log('hello');

    Meteor.call('addReview', 7, 10, "Impact", 5, 4, function(error, result) {
      var addedReview = result;

      Router.go('reviews/' + addedReview + '/submit');
    });
  }
});