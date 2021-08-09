//normal vabe korle

var  inch = 156;
var feet = inch/12;
console.log(feet);
console.log(feet);
console.log(feet);

// funciton diya korle
function inchToFeet(inch){
  var feet = inch/12;
  return feet;
}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);
var naniFeet = inchToFeet(288);
console.log(naniFeet);
var dadiFeet = inchToFeet(300);
console.log(dadiFeet);



// foor loop diya korle
var senior = [156, 288, 300];
for(var i=0; i<senior.length; i++  ){
    inchToFeet = senior[i]/12;
    console.log(inchToFeet);
}