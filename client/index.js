Template.index.events({
  'click .btn-google': function(e) {
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, function(err) {
      if (err) {
        console.log(err.reason);
      }
    });
  },

  'click .open-modal': function(e) {
    e.preventDefault();
    console.log('click');
    Modal.show('signInWithEmailModal');
  }
})