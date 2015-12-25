if (Employees.find().count() === 0) {
  Employees.insert({
    name: "Jonathan Katz",
    email: "jonathan@vulcun.com",
    squad: "Vulcun",
    product: "Vulcun",
    join_date: "April 2015",
    reviews: 5
  });

  Employees.insert({
    name: "Ben Lee",
    email: "ben@vulcun.com",
    squad: "Vulcun",
    product: "Vulcun",
    join_date: "May 2015",
    reviews: 10
  });
}