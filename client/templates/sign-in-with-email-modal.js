Template.signInWithEmailModal.events({
  'click .btn-create-account': function() {
    Session.set('createOrSignIn', 'create');
  },

  'click .btn-sign-in': function() {
    Session.set('createOrSignIn', 'signin');
  },

  'submit form': function(e) {
    e.preventDefault();

    var createOrSignIn, user;
    createOrSignIn = Session.get('createOrSignIn');
    user = {
      email: $('[name="emailAddress"]').val(),
      password: $('[name="password"]').val()
    };
    if (createOrSignIn === "create") {
      return Meteor.call('validateEmailAddress', user.email, function(error, response) {});
    } else {
      return Meteor.loginWithPassword(user.email, user.password, function(error) {
        if (error) {
          return alert(error.reason);
        } else {
          Modal.hide('#signInWithEmailModal');
        }
      });
    }
  }
});