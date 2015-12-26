Template.reviewsList.helpers({
  reviews: function() {
    return Reviews.find();
  }
});