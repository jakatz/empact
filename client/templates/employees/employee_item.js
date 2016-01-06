Template.employeeItem.helpers({
  average: function() {
    var current_employee = Meteor.userId();
    var employee_reviews = [Reviews.find({sucker: current_employee}).fetch()];
    var total = 0;

    $(employee_reviews).each(function(review) {
      total += review.rating;
    });

    console.log(total);
  }
});