Reviews = new Mongo.Collection('reviews');
Reviews.attachSchema(new SimpleSchema({
  submitted_by: {
    type: String
  },
  week: {
    type: Number
  },
  sucker: {
    type: String
  },
  rating: {
    type: Number
  },
  product: {
    type: String
  },
  squad: {
    type: String
  },
  feedback: {
    type: String
  }
}));