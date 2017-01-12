'use strict';

//constructor
function Store(storeName, minCust, maxCust, avgSold) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSold = avgSold;
  this.custPerHr = [];
  this.numOfCookies = [];
};
Store.prototype.ranAvg = function(min, max) {
  var min = Math.ceil(this.minCust);
  var max = Math.floor(this.maxCust);
  var avgCust = (Math.floor(Math.random() * (max - min + 1)) + min);
  return avgCust;
};
Store.prototype.cookiesAndCust = function() {
  for(var i = 0; i < 15; i++) {
    this.custPerHr.push(this.ranAvg());
  };
  return this.custPerHr;
};
Store.prototype.avgCookiesPerHr = function() {
  this.cookiesAndCust();
  console.log(this.custPerHr);
  for (var i = 0; i < 15; i++){
    var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
    this.numOfCookies.push(cookieCount);
  }
  console.log(this.numOfCookies);
  return this.numofCookies;
};

var firstandpike = new Store('First and Pike', 23, 65, 6.3);
var seatacairport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattlecenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolhill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

firstandpike.avgCookiesPerHr();
seatacairport.avgCookiesPerHr();
seattlecenter.avgCookiesPerHr();
capitolhill.avgCookiesPerHr();
alki.avgCookiesPerHr();

// var firstandpike = {
//   minCust:23,
//   maxCust:65,
//   avgSold:6.3,
//   custPerHr: [],
//   numOfCookies: [],
//   cookiesAndCust: function() {
//     for(var i = 0; i < 15; i++) {
//       this.custPerHr.push(ranAvg(this.minCust,this.maxCust));
//     };
//     return this.custPerHr;
//   },
//   avgCookiesPerHr: function(){
//     this.cookiesAndCust();
//     console.log(this.custPerHr);
//     for (var i = 0; i < 15; i++){
//       var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
//       this.numOfCookies.push(cookieCount);
//     }
//     console.log(this.numOfCookies);
//     return this.numofCookies;
//   }
// };
// firstandpike.avgCookiesPerHr();
// var seatacairport = {
//   minCust:3,
//   maxCust:24,
//   avgSold:1.2,
//   custPerHr: [],
//   numOfCookies: [],
//   cookiesAndCust: function(){
//     for(var i = 0; i < 15; i++){
//       this.custPerHr.push(ranAvg(this.minCust, this.maxCust));
//     }
//     return this.custPerHr;
//   },
//   avgCookiesPerHr: function(){
//     this.cookiesAndCust();
//     console.log(this.custPerHr);
//     for (var i = 0; i < 15; i++){
//       var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
//       this.numOfCookies.push(cookieCount);
//     }
//     console.log(this.numOfCookies);
//     return this.numofCookies;
//   }
// };
// seatacairport.avgCookiesPerHr();
// var seattlecenter = {
//   minCust:11,
//   maxCust:38,
//   avgSold:3.7,
//   custPerHr: [],
//   numOfCookies: [],
//   cookiesAndCust: function(){
//     for(var i = 0; i < 15; i++){
//       this.custPerHr.push(ranAvg(this.minCust, this.maxCust));
//     }
//     return this.custPerHr;
//   },
//   avgCookiesPerHr: function(){
//     this.cookiesAndCust();
//     console.log(this.custPerHr);
//     for (var i = 0; i < 15; i++){
//       var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
//       this.numOfCookies.push(cookieCount);
//     }
//     console.log(this.numOfCookies);
//     return this.numofCookies;
//   }
// };
// seattlecenter.avgCookiesPerHr();
// var capitolhill = {
//   minCust:20,
//   maxCust:38,
//   avgSold:2.3,
//   custPerHr: [],
//   numOfCookies: [],
//   cookiesAndCust: function(){
//     for(var i = 0; i < 15; i++){
//       this.custPerHr.push(ranAvg(this.minCust, this.maxCust));
//     }
//     return this.custPerHr;
//   },
//   avgCookiesPerHr: function(){
//     this.cookiesAndCust();
//     console.log(this.custPerHr);
//     for (var i = 0; i < 15; i++){
//       var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
//       this.numOfCookies.push(cookieCount);
//     }
//     console.log(this.numOfCookies);
//     return this.numofCookies;
//   }
// };
// capitolhill.avgCookiesPerHr();
// var alki = {
//   minCust:2,
//   maxCust:26,
//   avgSold:4.6,
//   custPerHr: [],
//   numOfCookies: [],
//   cookiesAndCust: function(){
//     for(var i = 0; i < 15; i++){
//       this.custPerHr.push(ranAvg(this.minCust, this.maxCust));
//     }
//     return this.custPerHr;
//   },
//   avgCookiesPerHr: function(){
//     this.cookiesAndCust();
//     console.log(this.custPerHr);
//     for (var i = 0; i < 15; i++){
//       var cookieCount = Math.floor(this.custPerHr[i] * this.avgSold);
//       this.numOfCookies.push(cookieCount);
//     }
//     console.log(this.numOfCookies);
//     return this.numofCookies;
//   }
// };
// alki.avgCookiesPerHr();

//form
var formEl = document.getElementById('newlocation');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  var newLocation = new Store(event.target.location.value, event.target.minCust.value, event.target.maxCust.value, event.target.avgSold.value);
  console.log(newLocation);
  newLocation.avgCookiesPerHr();
}, false);
