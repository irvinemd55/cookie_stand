'use strict';

var storeHours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','7:00PM','8:00PM'];
var pikeEl = document.getElementById('firstAndPikeSchedule');
var firstAndPike = {
  min: 23,
  max: 65,
  average: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  customersSum: 0,
  cookiesSum: 0,
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
      this.cookiesSum += this.cookiesPerHour[j];
    }
  },
  render: function(){
    this.totalCookies();
    for (var k = 0; k < storeHours.length; k++){
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
      pikeEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    pikeEl.appendChild(liEl);
  }
};
firstAndPike.render();

var seaTacAirportEl = document.getElementById('seaTacAirportSchedule');
var seaTacAirport = {
  min: 3,
  max: 24,
  average: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  customersSum: 0,
  cookiesSum: 0,
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
      this.cookiesSum += this.cookiesPerHour[j];
    }
  },
  render: function(){
    this.totalCookies();
    for (var k = 0; k < storeHours.length; k++){
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
      seaTacAirportEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    seaTacAirportEl.appendChild(liEl);
  }
};
seaTacAirport.render();

var seaTacCenterEl = document.getElementById('seaTacCenterSchedule');
var seaTacCenter = {
  min: 11,
  max: 38,
  average: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  customersSum: 0,
  cookiesSum: 0,
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
      this.cookiesSum += this.cookiesPerHour[j];
    }
  },
  render: function(){
    this.totalCookies();
    for (var k = 0; k < storeHours.length; k++){
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
      seaTacCenterEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    seaTacCenterEl.appendChild(liEl);
  }
};
seaTacCenter.render();

var capitolHillEl = document.getElementById('capitolHillSchedule');
var capitolHill = {
  min: 20,
  max: 38,
  average: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  customersSum: 0,
  cookiesSum: 0,
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
      this.cookiesSum += this.cookiesPerHour[j];
    }
  },
  render: function(){
    this.totalCookies();
    for (var k = 0; k < storeHours.length; k++){
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
      capitolHillEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    capitolHillEl.appendChild(liEl);
  }
};
capitolHill.render();

var alkiEl = document.getElementById('alkiSchedule');
var alki = {
  min: 2,
  max: 16,
  average: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  customersSum: 0,
  cookiesSum: 0,
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
      this.customersSum += this.customersPerHour[i];
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
      this.cookiesSum += this.cookiesPerHour[j];
    }
  },
  render: function(){
    this.totalCookies();
    for (var k = 0; k < storeHours.length; k++){
      var liEl = document.createElement('li'); //calling in a list element
      liEl.textContent = storeHours[k] + ': ' + this.cookiesPerHour[k] + ' cookies sold to ' + this.customersPerHour[k] + ' total customers.';
      alkiEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookiesSum + ' cookies sold and ' + this.customersSum + ' customers served.';
    alkiEl.appendChild(liEl);
  }
};
alki.render();
