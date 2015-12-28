 Meteor.startup(function() {
  process.env['MAILGUN_API_KEY'] = "key-e742e29fd2c0ed89deab910ac2d8ba13";
  process.env['MAILGUN_DOMAIN'] = "sandbox2c3f823a6c2e465288e1660a735e6f43.mailgun.org";
  process.env['MAILGUN_API_URL'] = "https://api.mailgun.net/v3/sandbox2c3f823a6c2e465288e1660a735e6f43.mailgun.org";
  process.env.MAIL_URL = "smtp://postmaster%40sandbox2c3f823a6c2e465288e1660a735e6f43.mailgun.org:a93bbbdb4400a453335617705a9ce2de@smtp.mailgun.org:587";
 });