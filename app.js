'use strict';

var storeHours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','7:00PM','8:00PM'];
var pikeEl = document.getElementById('firstAndPikeSchedule');
var firstAndPike = {
  min: 23,
  max: 65,
  average: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCustomers: function() {
    for (var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
  },
  totalCookies: function() {
    this.totalCustomers();
    for (var j = 0; j < this.customersPerHour.length; j++){
      this.cookiesPerHour.push(Math.round(this.customersPerHour[j] * this.average));
    }
  }
};
firstAndPike.totalCookies();

for (var i = 0; i < storeHours.length; i++){
  var liEl = document.createElement('li');
  liEl.textContent = storeHours[i] + ': ' + firstAndPike.cookiesPerHour[i] + ' cookies sold to ' + firstAndPike.customersPerHour[i] + ' total customers.';
  pikeEl.appendChild(liEl);
}


// console.log(firstAndPike);
//
//
//
// function totalCookies(average,total){
//   average = average;
//   total = total;
//   return Math.round(total * average);
// }
// console.log(totalCookies(firstAndPike.average, currentTime));
