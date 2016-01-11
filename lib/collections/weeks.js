Weeks = new Mongo.Collection('weeks');
Weeks.attachSchema(new SimpleSchema({
  currentWeek: {type: Number}
}));