

// for(var i=10; i>=1; i--){

// }

// var i =0;
// while (i> =10){
// i--;
// }

// 0! =1
// 2! = 1*2
// 3!=(3-1)!*3
// 4! = 1*2*3*4
// 5! = (5-1)!*5
// 6! = 5!*6
// 7! = (7-1)!*7
// n! =(n-1)!*n
// n! = n*(n-1)!
// 10! = 1*2*3*4*5*6*7*8*9*10


function factorial (n){

    if (n==0){
     return 1;
    }
    else{
        return n * factorial(n-1);
    }

}
var result = factorial(5);
console.log(result);