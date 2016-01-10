Meteor.startup(function() {
  /////////////////// Email Validation //////////////////////
  // Set the from address
  Accounts.emailTemplates.from = 'Vulcun';

  // Application name
  Accounts.emailTemplates.siteName = 'Project Impact';

  // Subject line
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return 'Confirm Your Email Address For Project Impact';
  };

  // Email text
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return 'Thank you for registering.  Please click on the following link to verify your email address: \r\n' + url;
  };
});