Employees = new Mongo.Collection('employees');
Employees.attachSchema(new SimpleSchema({
  first_name: {
    type: String,
    label: "firstName"
  },
  last_name: {
    type: String,
    label: "lastName"
  },
  email: {
    type: String,
    label: "Email"
  },
  join_date: {
    type: String,
    label: "Join Date"
  },
  squad: {
    type: String,
    label: "Squad"
  },
  created_on: {
    type: Date,
    label: "Created On"
  }
}));