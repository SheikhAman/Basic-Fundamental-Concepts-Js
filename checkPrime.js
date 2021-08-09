// var n = 18;

// for( var i = 2; i<n; i++){

// console.log( i , n/i);
// } 

/***
var n = 18;

for( var i = 2; i<n; i++){

console.log( i , n%i);
} 
**/

function isPrime(n){
for( var i = 2; i<n; i++){

if(n%i==0){
   return "Not a prime Number";
}

}
return "Your Number is a Prime Number"; 

}
var result = isPrime (11);
console.log(result);

