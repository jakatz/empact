if (Employees.find().count() === 0) {
  Employees.insert({
    name: "Jonathan Katz",
    email: "jonathan@vulcun.com",
    squad: "Vulcun",
    product: "Vulcun",
    join_date: "April 2015",
    reviews: 5,
    active: true
  });

  Employees.insert({
    name: "Ben Lee",
    email: "ben@vulcun.com",
    squad: "Vulcun",
    product: "Vulcun",
    join_date: "May 2015",
    reviews: 10,
    active: true
  });

  Employees.insert({
    name: "Murtaza Hussain",
    email: "murtaza@vulcun.com",
    squad: "CEO",
    product: "All",
    join_date: "May 2014",
    reviews: 100,
    active: true
  });
}