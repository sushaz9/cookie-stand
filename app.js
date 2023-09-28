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

// get the table from the HTML so we can add rows
const table = document.getElementById("salesData");

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CookieStore Factory. It makes CookieStore objects
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

  // add the store name to the row
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

// create our store objects
const seattle = new Shop("Seattle", 23, 65, 6.3);
const tokyo = new Shop("Tokyo", 3, 24, 1.2);
const dubai = new Shop("Dubai", 11, 38, 3.7);
const paris = new Shop("Paris", 20, 38, 2.3);
const lima = new Shop("Lima", 2, 16, 4.6);

// calculate sales for each store (commented out because the calculate sales in the render method)
// seattle.calculateSales()
// tokyo.calculateSales()
// dubai.calculateSales()
// paris.calculateSales()
// lima.calculateSales()

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
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

const form = document.querySelector("form");

// we are listening to the submit event of our form
form.addEventListener("submit", function (event) {
  // the default behaviour of submit is:
  // - refresh the page
  // - add information to the url
  // so here we are preventing that from happening
  event.preventDefault();

  // we are collecting the information from the event object to get the users inputs
  const username = event.target.username.value;
  const email = event.target.email.value;

  // using DOM manipulation to add the response to the page (just so we can see it)
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
