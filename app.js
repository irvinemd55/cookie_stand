'use strict';

var storeHours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','7:00PM','8:00PM']; //variable for each individual hour


function CookiesAndCustomers(name, min, max, average, list){
  this.name = name;
  this.list = list;
  this.min = min;
  this.max = max;
  this.average = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.customersSum = 0;
  this.cookiesSum = 0;
  this.totalCustomers = function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  };
  this.totalCookies = function() {
    this.totalCustomers();
    for (var i = 0; i < this.customersPerHour.length; i++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.average));
      this.cookiesSum += this.cookiesPerHour[i];
    }
  };
  this.render = function(){ //renders values to html file
    this.totalCookies(); //calls up totalCookies function
    for (var k = 0; k < storeHours.length; k++){ //for loop going through each respective hour
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.'; //creates string for printing
      list.appendChild(liEl); //ammends list
    }
    liEl = document.createElement('li'); //ammends list with sum values as requested
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    list.appendChild(liEl);
  };
}
var firstAndPike = new CookiesAndCustomers ('First and Pike', 23, 65, 6.3,document.getElementById('firstAndPikeSchedule'));
firstAndPike.render();
console.log(firstAndPike);
console.log(storeHours);
console.log(firstAndPike.totalCookies);

// var pikeEl = document.getElementById('firstAndPikeSchedule'); //variable storing reference to html document
// var firstAndPike = { //first list
//   min: 23, //min property
//   max: 65, //max property
//   average: 6.3, //average property
//   customersPerHour: [], //customersPerHour property array used for storing values
//   cookiesPerHour: [], //cookiesPerHour property array used for storing values
//   customersSum: 0, //property storing total sum of customers
//   cookiesSum: 0, //property storing total sum of cookies
//   totalCustomers: function() { //function calculating total customer per hour
//     for (var i = 0; i < storeHours.length; i++){ //for loop going through each hour before cutting out
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min); //creates a random integer based on the min/max properties listed above and pushes to array
//       this.customersSum += this.customersPerHour[i]; //adds to customersSum value
//     }
//   },
//   totalCookies: function() { //function multiplying average by total customers from previous function
//     this.totalCustomers(); //runs totalCustomers function
//     for (var j = 0; j < this.customersPerHour.length; j++){ //for loop going hour by hour
//       this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average)); //creates number by multiplying avg and total and rounding the value. additionaly pushes value to array for storage
//       this.cookiesSum += this.cookiesPerHour[j]; //adds to cookiesSum value
//     }
//   },
//   render: function(){ //renders values to html file
//     this.totalCookies(); //calls up totalCookies function
//     for (var k = 0; k < storeHours.length; k++){ //for loop going through each respective hour
//       var liEl = document.createElement('li'); //calling in a list element
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.'; //creates string for printing
//       pikeEl.appendChild(liEl); //ammends list
//     }
//     liEl = document.createElement('li'); //ammends list with sum values as requested
//     liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
//     pikeEl.appendChild(liEl);
//   }
// };
// firstAndPike.render();
//
// var seaTacAirportEl = document.getElementById('seaTacAirportSchedule');
// var seaTacAirport = {
//   min: 3,
//   max: 24,
//   average: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   customersSum: 0,
//   cookiesSum: 0,
//   totalCustomers: function() {
//     for (var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
//       this.customersSum += this.customersPerHour[i];
//     }
//   },
//   totalCookies: function() {
//     this.totalCustomers();
//     for (var j = 0; j < this.customersPerHour.length; j++){
//       this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
//       this.cookiesSum += this.cookiesPerHour[j];
//     }
//   },
//   render: function(){
//     this.totalCookies();
//     for (var k = 0; k < storeHours.length; k++){
//       var liEl = document.createElement('li'); //calling in a list element
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
//       seaTacAirportEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
//     seaTacAirportEl.appendChild(liEl);
//   }
// };
// seaTacAirport.render();
//
// var seaTacCenterEl = document.getElementById('seaTacCenterSchedule');
// var seaTacCenter = {
//   min: 11,
//   max: 38,
//   average: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   customersSum: 0,
//   cookiesSum: 0,
//   totalCustomers: function() {
//     for (var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
//       this.customersSum += this.customersPerHour[i];
//     }
//   },
//   totalCookies: function() {
//     this.totalCustomers();
//     for (var j = 0; j < this.customersPerHour.length; j++){
//       this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
//       this.cookiesSum += this.cookiesPerHour[j];
//     }
//   },
//   render: function(){
//     this.totalCookies();
//     for (var k = 0; k < storeHours.length; k++){
//       var liEl = document.createElement('li'); //calling in a list element
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
//       seaTacCenterEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
//     seaTacCenterEl.appendChild(liEl);
//   }
// };
// seaTacCenter.render();
//
// var capitolHillEl = document.getElementById('capitolHillSchedule');
// var capitolHill = {
//   min: 20,
//   max: 38,
//   average: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   customersSum: 0,
//   cookiesSum: 0,
//   totalCustomers: function() {
//     for (var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
//       this.customersSum += this.customersPerHour[i];
//     }
//   },
//   totalCookies: function() {
//     this.totalCustomers();
//     for (var j = 0; j < this.customersPerHour.length; j++){
//       this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
//       this.cookiesSum += this.cookiesPerHour[j];
//     }
//   },
//   render: function(){
//     this.totalCookies();
//     for (var k = 0; k < storeHours.length; k++){
//       var liEl = document.createElement('li'); //calling in a list element
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
//       capitolHillEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
//     capitolHillEl.appendChild(liEl);
//   }
// };
// capitolHill.render();
//
// var alkiEl = document.getElementById('alkiSchedule');
// var alki = {
//   min: 2,
//   max: 16,
//   average: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   customersSum: 0,
//   cookiesSum: 0,
//   totalCustomers: function() {
//     for (var i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
//       this.customersSum += this.customersPerHour[i];
//     }
//   },
//   totalCookies: function() {
//     this.totalCustomers();
//     for (var j = 0; j < this.customersPerHour.length; j++){
//       this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
//       this.cookiesSum += this.cookiesPerHour[j];
//     }
//   },
//   render: function(){
//     this.totalCookies();
//     for (var k = 0; k < storeHours.length; k++){
//       var liEl = document.createElement('li'); //calling in a list element
//       liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
//       alkiEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
//     alkiEl.appendChild(liEl);
//   }
// };
// alki.render();
