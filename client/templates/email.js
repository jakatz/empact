Template.email.events({
  'click .send-email': function() {
    console.log('email sent');
    Meteor.call('sendEmail',
                'jonathan@vulcun.com',
                'hello',
                '<h3>This is the title</h3></br><p>and this is the message</p>');
  }
});