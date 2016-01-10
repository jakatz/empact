Employees = new Mongo.Collection('employees');
Employees.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  email: {
    type: String,
    label: "Email"
  },
  join_date: {
    type: Date,
    label: "Join Date"
  },
  squad: {
    type: String,
    label: "Squad"
  }
}));