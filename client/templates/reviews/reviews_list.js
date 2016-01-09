Template.reviewsList.helpers({
  reviews: function() {
    return Reviews.find();
  }
});

Template.reviewsList.events({
});