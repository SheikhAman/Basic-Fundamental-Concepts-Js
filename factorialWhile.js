//while syntax

// var i =1;  
// while(i<=10){
// console.log(i);
// i++;
// }

// 5! = 1*2*3*4*5*
// 10! =1*2*3*4*5*6*7*8*9*10


// var i =1;
// var factorial =1;
// while(i<=10){
// factorial = factorial *i;
// console.log(i , factorial);

//     i++;
// }



// var i =1;
// var factorial =1;
// while(i<=10){
// factorial =factorial*i;
// i++;
// }
// console.log(factorial);

function factorial(num){
    var i=1;
    var fact =1;
    while(i<=num){
    fact =fact*i;
        i++;
        
    }
    return fact;
}
var result = factorial(5);
console.log(result);