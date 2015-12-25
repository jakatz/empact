var employeesData = [
  {
    "name": 'Jonathan Katz',
    "email": 'jonathan@vulcun.com',
    "squad": 'Vulcun',
    "join_date": "April 2015",
    "product": "Vulcun",
    "reviews": '5'
  },
  {
    "name": 'Ben Lee',
    "email": 'ben@vulcun.com',
    "squad": 'Vulcun',
    "join_date": "June 2015",
    "product": "Vulcun",
    "reviews": '5'
  }
];

Template.employeesList.helpers({
  employees: employeesData
});