'use strict';

function ranAvg(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var avgCust = (Math.floor(Math.random() * (max - min + 1)) + min);
  return avgCust;
}

var firstandpike = {
  minCust:23,
  maxCust:65,
  avgSold:6.3,
  custPerHr: [],
  numOfCookies: [],
  cookiesAndCust: function(){
    for(var i = 0; i < 15; i++){
      this.custPerHr.push(ranAvg(this.minCust, this.maxCust));
    }
    return this.custPerHr;
  },
  avgCookiesPerHr: function(){
    this.cookiesAndCust();
    console.log(this.custPerHr);
    for (var i = 0; i < 15; i++){
      var cookieCount = this.custPerHr[i] * this.avgSold;
      this.numOfCookies.push(cookieCount);
    }
    console.log(this.numOfCookies);
    return this.numofCookies;
  }
};

var seatacairport = {
  minCust:3,
  maxCust:24,
  avgSold:1.2,
  cookiesAndCust: function (){
    for(var i = 0; i >= 15; i++){
      ranAvg(this.minCust, this.maxCust);
    }
  }
};

var seattlecenter = {
  minCust:11,
  maxCust:38,
  avgSold:3.7,
  cookiesAndCust: function (){
    for(var i = 0; i >= 15; i++){
      ranAvg(this.minCust, this.maxCust);
    }
  }
};

var capitolhill = {
  minCust:20,
  maxCust:38,
  avgSold:2.3,
  cookiesAndCust: function (){
    for(var i = 0; i >= 15; i++){
      ranAvg(this.minCust, this.maxCust);
    }
  }
};

var alki = {
  minCust:2,
  maxCust:26,
  avgSold:4.6,
  cookiesAndCust: function (){
    for(var i = 0; i >= 15; i++){
      ranAvg(this.minCust, this.maxCust);
    }
  }
};
