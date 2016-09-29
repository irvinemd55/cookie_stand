'use strict';
// var restaurantForm = document.getElementById('restaurantform');
var storeHours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','7:00PM','8:00PM']; //variable for each individual hour
var container = document.getElementById('table');//document referst to html. getElementById refers to the element assigned in the document`
var renderHeader = function(){
  var blankSpace = document.createElement('th');//createElement creates the specific element referenced
  container.appendChild(blankSpace); //blankSpace has no content so it creates and empty cell
  for (var i = 0; i < storeHours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = storeHours[i] + ':';//same function as blankspace except storehours have value
    container.appendChild(thEl);//appendChild takes content from child in parenthesis and appends it to the parent listed in the beginning
  }
};
renderHeader();


var CookiesAndCustomers = function(name, min, max, average){
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.customersSum = 0;
  this.cookiesSum = 0;
};

CookiesAndCustomers.prototype.totalCustomers = function() {
  for (var i = 0; i < storeHours.length; i++){
    this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    this.customersSum += this.customersPerHour[i];
  }
};

CookiesAndCustomers.prototype.totalCookies = function() {
  this.totalCustomers();
  for (var i = 0; i < this.customersPerHour.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.average));
    this.cookiesSum += this.cookiesPerHour[i];
  }
};

CookiesAndCustomers.prototype.render = function(){ //renders values to html file
  this.totalCookies();
  var trEl = document.createElement('tr');//creates a row html element
  container.appendChild(trEl); //appends new row to the container parent
  var storeNames = document.createElement('td'); //creates a cell element
  storeNames.textContent = this.name;//calls up restaurant name
  trEl.appendChild(storeNames);//appends parent with storenames
  for (var k = 0; k < storeHours.length; k++){
    var tdEl = document.createElement('td');//for loop created cell elements
    tdEl.textContent = this.cookiesPerHour[k]; //identifies point in index
    trEl.appendChild(tdEl); //appends parent
  };
};

var firstAndPike = new CookiesAndCustomers ('First and Pike', 23, 65, 6.3);
firstAndPike.render();
var seaTacAirport = new CookiesAndCustomers ('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.render();
var seattleCenter = new CookiesAndCustomers ('Seattle Center', 11, 38, 3.7);
seattleCenter.render();
var capitolHill = new CookiesAndCustomers ('Capitol Hill', 3, 24, 1.2);
capitolHill.render();
var alki = new CookiesAndCustomers ('Alki', 3, 24, 1.2);
alki.render();
var form = document.getElementById('restaurantform');

var handleCommentSubmit = function(event) {
  console.log(event);
  event.preventDefault();

  if (!event.target.location.value || !event.target.minimum.value || !event.target.maximum.value || !event.target.average.value) {
    return alert('Fields cannot be empty!');
  };
  var restaurantName = event.target.location.value;
  var min = parseInt(event.target.minimum.value);
  var max = parseInt(event.target.maximum.value);
  var average = parseInt(event.target.average.value);
  var newStore = new CookiesAndCustomers(restaurantName, min, max, average);
  console.log(newStore);
  newStore.render();
};

form.addEventListener('submit',handleCommentSubmit);
