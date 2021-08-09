// console.log(2032%4);

// function isLeapYear(year){
    
//         const remainder = year%4; // check korbe reaminder ar value ki 0 ar equal ki na 0 hole output true show korbe ar 0 ar equal na hole false show korbe
//     if(remainder==0){

//         return true;
//     }
//     else{
//         return false;
// }
// }
// const check2000 = isLeapYear(2000);
// console.log(check2000);


function checkleapYear(year)
{
    if (year%4==0 && year%100!=0 || year%400==0)
    {
        return true;
    }   
    else{
        return false;
    }
}
const check1700 = checkleapYear(1700);
console.log(check1700);