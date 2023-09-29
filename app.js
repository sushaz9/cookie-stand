const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// this gets table from the HTML so can add rows
const table = document.getElementById("salesData");

// gives random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 'Shop' makes Shop objects
function Shop(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

Shop.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    // get the number of customers for this hour
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    // get the number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    // increase the total cookies by adding this hours sales to it
    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
};

Shop.prototype.render = function () {
  // calculating sales data before rendering
  this.calculateSales();

  // create a row
  const tr = document.createElement("tr");

  // adds 'this' store location to row
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th);

  // add this store's data to that row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // create a new td and put the sales number in it
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  //add total to end of row
  const totalTd = document.createElement("td");
  totalTd.textcontent = this.totalCookiesSold;
  tr.appendChild(totalTd);

  // add that row to the table
  table.appendChild(tr);
};

// create store objects
const stores = [
  new Shop("Seattle", 23, 65, 6.3),
  new Shop("Tokyo", 3, 24, 1.2),
  new Shop("Dubai", 11, 38, 3.7),
  new Shop("Paris", 20, 38, 2.3),
  new Shop("Lima", 2, 16, 4.6),
];

// //create top row
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// add a total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
table.appendChild(headerRow);

// render each store on the page

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
const form = document.querySelector("form");

//  listening to the submit event of our form
form.addEventListener("submit", function (event) {
  //prevents submit refreshing page and adding info to URL
  event.preventDefault();

  // collects info from event object to get users input
  const location = event.target.location.value;
  const min = event.target.minCust.value;
  const max = event.target.maxCust.value;
  const avgCookiesPerCust = event.target.avgCookiesPerCust.value;

  const newStore = new Shop(location, +minCust, +maxCust, avgCookiesPerCust);
  newStore.render();

  // create a total row
  function renderTotalRow() {
    // make a new tr
    const tr = document.createElement("tr");
    // add a "total row" heading
    const th = document.createElement("th");
    th.textContent = "Hourly Total";
    tr.appendChild(th);
    // add total for each

    table.appendChild(tr);

    renderTotalRow();
  }

  for (let i = 0; i < hours.length; i++) {
    console.log("hours", hours[i]);
    console.log("Seattle"), stores[0].cookiesPerHour[i];
    let hourlyTotal = 0;

    for (let k = 0; k < stores.length; k++) {
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
    }

    // add hourly total td to row
    const td = document.createElementById("td");
    td.textContent = hourlyTotal;
    td.appendChild(td);
  }

  //using DOM manipulation to add the response to the page (just so we can see it)
  const submit = document.getElementById("submit");
  const p = document.createElement("p");
  p.textContent = `${username} with the email ${email} has requested to be contacted.`;
  submit.appendChild(p);
});

// get my button DOM node
// querySelector gets the FIRST item that matches the selector
const button = document.querySelector("button");

// button has an event listener, that when you click, run the callback function (cbf)
button.addEventListener("click", function () {
  button.classList.toggle("salmon");
  button.classList.toggle("bisque");
});
