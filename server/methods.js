Meteor.methods({
  sendEmail: function(to, subject, text) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // Don't allow sending email unless logged in
    if (!Meteor.user()) {
      throw new Meteor.Error(403, "not logged in");
    }


    Email.send({
      to: to,
      from: Meteor.user().emails[0].address,
      subject: subject,
      text: text
    });
  },

  addReview: function(user_average, review_count, product_name, product_average, company_average) {
    return Reviews.insert({
      week: new Date(),
      user_average: user_average,
      review_count: review_count,
      product_name: product_name,
      product_average: product_average,
      company_average: company_average
    });
  }
});