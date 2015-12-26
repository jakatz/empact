Template.email.events({
  'click .send-email': function() {
    console.log('email sent');
    Meteor.call('sendEmail',
                'jonathan@vulcun.com',
                'hello',
                'goodbye');
  }
});