// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefixOne = parseInt(cardNumber.slice(0, 1));
  var prefixTwo = parseInt(cardNumber.slice(0, 2));
  var prefixThree = parseInt(cardNumber.slice(0, 3));
  var prefixFour = parseInt(cardNumber.slice(0, 4));
  var prefixSix = parseInt(cardNumber.slice(0, 6));
  var cardLength = cardNumber.length;

  if ((prefixTwo === 38 || prefixTwo === 39) && (cardLength === 14)) {
  	return "Diner's Club";
  } 
  else if ((prefixTwo === 34 || prefixTwo === 37) && (cardLength === 15)) {
  	return "American Express";
  }
  else if ( (prefixfour === 4903 || prefixFour === 4905 || prefixFour === 4911 || prefixFour === 4936 || prefixFour === 6333 || prefixFour === 6759 || prefixSix === 564182 || prefixSix === 633110 )  
    && (cardLength === 16 || cardLength ===18 || cardLength ===19) ) {
    return "Switch";
  }
  else if ((prefixOne === 4) && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    return "Visa";
  }
  else if ((prefixTwo === 51 || prefixTwo === 52 || prefixTwo === 53 || prefixTwo === 54 || prefixTwo === 55) 
    && (cardLength === 16)) {
    return "MasterCard";
  } 
  else if ( (prefixFour === 6011 || prefixTwo === 65) || (prefixThree >= 644 && prefixThree <= 649) 
    && (cardLength === 16 || cardLength === 19) ) {
    return "Discover";  
  }
  else if ((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) 
    && (cardLength >= 12 && cardLength <= 19)) {
    return "Maestro";
  }
  else if ( (prefixThree >= 624 && prefixThree <= 626) || (prefixFour >= 6282 && prefixFour <= 6288) || (prefixSix >= 622126 && prefixSix <= 622925)  
    && (cardLength >=16 && cardLength <=19) ) {
    return "China UnionPay";
  }
  else {
    return "Not a valid card number";
  }
}


// console.log(detectNetwork('38888888988384'));
// console.log(detectNetwork('39888888988384'));
// console.log(detectNetwork('348888889883846'));
// console.log(detectNetwork('378888889883846'));
// console.log(detectNetwork('4388888889883'));
// console.log(detectNetwork('4388888889883444'));
// console.log(detectNetwork('4388888889883666777'));
// console.log(detectNetwork('5138888888988355'));
// console.log(detectNetwork('5238888888988355'));
// console.log(detectNetwork('5338888888988355'));
// console.log(detectNetwork('5438888888988355'));
// console.log(detectNetwork('5538888888988355'));
// console.log(detectNetwork('6011888889883550'));
// console.log(detectNetwork('6011888889883550444'));
// console.log(detectNetwork('6511888889883550'));
// console.log(detectNetwork('6511888889883550444'));
// console.log(detectNetwork('6441888888988350'));
// console.log(detectNetwork('6441888888988350444'));
// console.log(detectNetwork('6451888888988550'));
// console.log(detectNetwork('6451888888983550444'));
// console.log(detectNetwork('6461888888983550'));
// console.log(detectNetwork('6461888888883550444'));
// console.log(detectNetwork('6471888889883550'));
// console.log(detectNetwork('6471888889883550444'));
// console.log(detectNetwork('6481888889883550'));
// console.log(detectNetwork('6481888889883550444'));
// console.log(detectNetwork('6491888889883550'));
// console.log(detectNetwork('6491888889883550444'));
// console.log(detectNetwork('501888889883'));
// console.log(detectNetwork('502088889883'));
// console.log(detectNetwork('503888889883'));
// console.log(detectNetwork('630488889883'));
// console.log(detectNetwork('5018888898834'));
// console.log(detectNetwork('5020888898834'));
// console.log(detectNetwork('5038888898834'));
// console.log(detectNetwork('6304888898834'));
// console.log(detectNetwork('50188888988344'));
// console.log(detectNetwork('50208888988344'));
// console.log(detectNetwork('50388888988344'));
// console.log(detectNetwork('63048888988344'));
// console.log(detectNetwork('501888889883444'));
// console.log(detectNetwork('502088889883444'));
// console.log(detectNetwork('503888889883444'));
// console.log(detectNetwork('630488889883444'));
// console.log(detectNetwork('5018888898834444'));
// console.log(detectNetwork('5020888898834444'));
// console.log(detectNetwork('5038888898834444'));
// console.log(detectNetwork('6304888898834444'));
// console.log(detectNetwork('50188888988344444'));
// console.log(detectNetwork('50208888988344444'));
// console.log(detectNetwork('50388888988344444'));
// console.log(detectNetwork('63048888988344444'));
// console.log(detectNetwork('501888889883444444'));
// console.log(detectNetwork('502088889883444444'));
// console.log(detectNetwork('503888889883444444'));
// console.log(detectNetwork('630488889883444444'));
// console.log(detectNetwork('5018888898834444444'));
// console.log(detectNetwork('5020888898834444444'));
// console.log(detectNetwork('5038888898834444444'));
// console.log(detectNetwork('6304888898834444444'));


