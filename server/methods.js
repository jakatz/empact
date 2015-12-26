Meteor.methods({
  sendEmail: function(to, subject, text) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();


    Email.send({
      to: to,
      from: 'jonathan.a.katz@gmail.com',
      subject: subject,
      text: text
    });
  }
});