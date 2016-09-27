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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.average));
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
var seaTacAirport = new CookiesAndCustomers ('SeaTac Airport', 3, 24, 1.2,document.getElementById('seaTacAirportSchedule'));
seaTacAirport.render();
var seattleCenter = new CookiesAndCustomers ('Seattle Center', 11, 38, 3.7,document.getElementById('seattleCenterSchedule'));
seattleCenter.render();
var capitolHill = new CookiesAndCustomers ('Capitol Hill', 3, 24, 1.2,document.getElementById('capitolHillSchedule'));
capitolHill.render();
var alki = new CookiesAndCustomers ('Alki', 3, 24, 1.2,document.getElementById('alkiSchedule'));
alki.render();
