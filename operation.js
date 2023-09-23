var onionPrice = 50;
var eggPrice = 20;
var totalPrice = onionPrice + eggPrice
console.log(onionPrice);
console.log(eggPrice);
console.log(totalPrice);



var price1 = 10;
price1 +=20 ;
console.log(price1);

price1 *= 30;
price1 /= 30;
price1 -=40;
console.log(price1);


var onionPrice = + ""+50;
var eggPrice = +"50" ;
var totalPrice = onionPrice + eggPrice;
console.log(totalPrice);

//stringNumber to floatNumber
var onionPrice = "50";
var newOnionPrice = +"50" +  +"50";
var newOnionPrice = parseInt(newOnionPrice);
console.log(newOnionPrice);

//stringNumber to floatNumber
var onionPrice = "50.54";
var newOnionPrice = parseFloat("60.54");
console.log(newOnionPrice);

// toFixed 
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2)
sum = parseFloat(sum);
console.log(sum);

// Modulas or Remainder
var mango = 10;
var person = 3;
var sum = mango % person;
console.log(sum);

console.log("akash");

//Practice problem 1
var totalTaka = 1000;
var orangsAndApplesPrice = 700;
var returnTaka = totalTaka - orangsAndApplesPrice;
console.log(returnTaka);


//or

//Practice problem 1
var totalTaka = 1000;
var orangePrice = 400;
var applePrice = 300;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var returnPrice = totalTaka - totalPrice;
console.log(returnPrice);



console.log("akash");

//Practice problem 2(average)
var mathematics =75.25 ;
var biology =65 ;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log(totalMarks);
var totalSubjects = 5 ;
var averageMarks = totalMarks / totalSubjects;
var averageMarks = averageMarks.toFixed(3)
var averageMarks = parseInt(averageMarks);
var averageMarks = parseFloat(averageMarks);
console.log(averageMarks);



//Practice problem 3(concatation two string)
var string1 = "I am going to be";
var string2 = "an awesome web developer";
var concatString = string1 + string2 ;
console.log(concatString);



console.log("akash");

//Practice problem 4(remainder)
var givenNumberIs = 119;
var devidedBy = 5;
var remainderIs = givenNumberIs % devidedBy;
console.log(remainderIs);

