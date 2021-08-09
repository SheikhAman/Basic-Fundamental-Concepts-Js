var biscouitPrice = 8
if( biscouitPrice<10 ){
console.log("I will eat the biscuits");
}
else{
console.log("Khali cha is better");
}

var busSeat = 7
if( busSeat==8 ){
console.log("I will go to the picnic");
}
else{
console.log("I will stay home");
}

var biscouitPrice = 8
if( biscouitPrice != 8 ){
console.log("I will eat the biscuits");
}
else{
console.log("Khali cha is better");
}

var jobPaiso = false;
var savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
 console.log("Aso tomar patri khuji");
}
else{
console.log("Tor kopale biya nai");
}

var jobPaiso = false;
var savingAmount = 500000;
if(jobPaiso == true || savingAmount > 200000){
 console.log("Aso tomar patri khuji");
}
else{
console.log("Tor kopale biya nai");
}

var jobPaiso = true;
var savingAmount = 5000;
if(jobPaiso == true && savingAmount>200000){
console.log("Aso  tomar patri khuji");
}
else if(jobPaiso == false){
console.log("acha koi din por dekhbo");
}
else{
console.log("Tor kopale biya nai");
}


var date =  Date();
console.log(date);

var date =  new Date();
console.log(date);

var date = new Date('1997-7-2');
console.log(date);

var result = 49;
if(result >= 80){
    console.log("A+");
}
else if(result >= 70){
    console.log("A");
 
}
    
 else if (result >= 60){
    console.log("A-");
}
else if (result >= 50){
    console.log("B+");
}
else if (result >= 40){
    console.log("D");
}
else {
    console.log("F");
}