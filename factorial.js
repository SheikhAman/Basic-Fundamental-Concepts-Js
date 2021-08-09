// 3!=1*2*3
// 4!=4*3*2*1
// 5!=5*4*3*2*1
// 10!=10*9*8*7*6*5*4*3*2*1


// var factorial=1;
// for(var i=1;i<=10;i++){
//     factorial= factorial *i;
//     console.log(i, factorial);

// }


function factorial (num){
    var factorial =1;
for(var i=1; i<=num; i++){

    factorial=factorial*i;
    
   
}
return factorial;
}
var result =factorial(3);
console.log(result);

