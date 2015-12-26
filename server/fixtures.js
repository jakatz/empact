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

if (Reviews.find().count() === 0) {
  Reviews.insert({
    week: 1,
    user_average: 7,
    review_count: 10,
    product_name: "Vulcun",
    product_average: 6,
    company_average: 5
  });

  Reviews.insert({
    week: 2,
    user_average: 10,
    review_count: 15,
    product_name: "Vulcun",
    product_average: 7,
    company_average: 4
  });
}