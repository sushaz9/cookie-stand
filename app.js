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

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,

  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const customersThisHour = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(customersThisHour);
      this.cookiesPerHour.push(customersThisHour * this.avgCookiesPerCust);
    }
  },
};
seattle.calculateSales();
console.log(seattle);

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
const shopProfiles = document.getElementById("shopProfiles");

// create a new element, or elements, that represent
const article = document.createElement("article");

// inside that article, i need to put a h2 for the name, paragraph with their age, ul and some li's with their interests, image
// name
const h2 = document.createElement("h2"); // <h2></h2>
h2.textContent = seattle.location; // <h2>Seatle</h2>
article.appendChild(h2); // <article><h2>Trevor</h2></article>
shopProfiles.appendChild(article);

// interests
const ul = document.createElement("ul");
for (let i = 0; i < seattle.cookiesPerHour.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies sold`;
  ul.appendChild(li);
}
article.appendChild(ul);

// add the article to the page (by appending to the kittenProfiles div)
shopProfiles.appendChild(article);

/*const hours = [
//"6am",
//"7am",
//"8am",
//"9am",
//"10am",
//"11am",
//"12pm",
//"1pm",
//"2pm",
//"3pm",
//"4pm",
//"5pm",
//"6pm",
//"7pm",
//];

//function randomNumber(min, max) {
//return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//const seattle = {
//location: "seattle",
//minCust: 23,
//maxCust: 65,
//avgCookiesPerCust: 6.3,
//customersPerHour: [],
//cookiesPerHour: [],
//totalCookiesSold: 0,
//calculateSales: function () {
//for (let i = 0; i < hours.length; i++) {
//const customersPerHour = randomNumber(this.minCust, this.maxCust);
//this.customersPerHour.push(customersThisHour);
//this.cookiesPerHour.push(customersPerHour * this.avgCookiesPerCust);
//}
//},
//};

//seattle.calculateSales();
//console.log(seattle);

//this.avgCookiesPerCust * this.customersPerHour[i];
//this.hours.push(custThisHour);
//calcCookiesPerHour: function () {
//for (let i = 0; i < hours.length; i++) {
//const custThisHour = this.avgCookiesPerCust * this.customersPerHour[i];
//this.hours.push(custThisHour);
//}
//},

//const tokyo = {
  //location: "tokyo",
  //minCust: 3,
  //maxCust: 24,
  //avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

tokyo.calculateSales();
console.log(tokyo);

const dubai = {
  location: "dubai",
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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

dubai.calculateSales();
console.log(dubai);

const paris = {
  location: "paris",
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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

paris.calculateSales();
console.log(paris);

const lima = {
  location: "lima",
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
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

lima.calculateSales();
console.log(lima);
*/
