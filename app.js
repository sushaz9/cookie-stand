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

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create our first shop
const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

seattle.calculateSales();

// get the element on the page with the id salesData
const salesData = document.getElementById("salesData");

// add the title for the location
const seattleH2 = document.createElement("h2");
seattleH2.textContent = seattle.location;
salesData.appendChild(seattleH2);

// create a list to show the cookies sold at each hour
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

tokyo.calculateSales();

// add the title for the location
const tokyoH2 = document.createElement("h2");
tokyoH2.textContent = tokyo.location;
salesData.appendChild(tokyoH2);

// create a list to show the cookies sold at each hour
const tokyoUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${tokyo.cookiesPerHour[i]} cookies`;
  tokyoUl.appendChild(li);
} //

salesData.appendChild(tokyoUl);

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 2.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

dubai.calculateSales();

const dubaiH2 = document.createElement("h2");
dubaiH2.textContent = dubai.location;
salesData.appendChild(dubaiH2);

// create a list to show the cookies sold at each hour
const dubaiUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${dubai.cookiesPerHour[i]} cookies`;
  dubaiUl.appendChild(li);
} //

salesData.appendChild(dubaiUl);

console.log(dubai);

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

paris.calculateSales();

const parisH2 = document.createElement("h2");
parisH2.textContent = paris.location;
salesData.appendChild(parisH2);

// create a list to show the cookies sold at each hour
const parisUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${paris.cookiesPerHour[i]} cookies`;
  parisUl.appendChild(li);
} //

salesData.appendChild(parisUl);

console.log(paris);

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

lima.calculateSales();

const limaH2 = document.createElement("h2");
limaH2.textContent = lima.location;
salesData.appendChild(limaH2);

// create a list to show the cookies sold at each hour
const limaUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${lima.cookiesPerHour[i]} cookies`;
  limaUl.appendChild(li);
} //

salesData.appendChild(limaUl);

console.log(lima);

function Shop(
  location,
  minCust,
  maxCust,
  avgCookiesPerHour,
  customersPerHour,
  cookiesPerHour,
  totalCookiesSold
) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookiesSold = totalCookiesSold;
}

Shop.prototype.render = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    this.totalCookiesSold += this.cookiesPerHour[i];
  }
};

Shop.prototype.render = function () {
  const salesData = document.getElementById("salesData");
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.textContent = this.name;
  article.appendChild(h2);
  salesData.appendChild(article);
};

const ul = document.createElement("ul");
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
  ul.appendChild(li);
}
article.appendChild(ul);

salesData.appendChild(article);
