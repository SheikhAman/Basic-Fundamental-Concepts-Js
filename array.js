var friendsAge = [15, 17, 14, 16];
friendsAge[1]= 21;

var position = friendsAge.indexOf(14); 
console.log(friendsAge);
friendsAge.push(23);
friendsAge.push(24);
console.log(friendsAge);

var friendsAge = [15, 17, 14, 16];
friendsAge[1]= 21;

var position = friendsAge.indexOf(14); 
console.log(friendsAge.length);
friendsAge.push(23);
friendsAge.push(24);
console.log(friendsAge.length);

var friendsAge = [15, 17, 14, 16];
friendsAge[1]= 21;
var position = friendsAge.indexOf(14); 
console.log(friendsAge);
friendsAge.push(23);
friendsAge.push(24);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);

var teaLine = ["Kalam", "Salam", "Balam"];
teaLine.push(`Jalam`);
console.log(teaLine);
teaLine.pop();
console.log(teaLine);

var teaLine = ["Kalam", "Salam", "Balam"];
teaLine.shift();
console.log(teaLine);

var teaLine = [ 'Palam', "Kalam", "Salam", "Balam"];
var part = teaLine.slice(2);
console.log(part);

var teaLine = [ 'Palam', "Kalam", "Salam", "Balam", "Talam"];
var part = teaLine.slice(2,5);
console.log(part);
console.log(teaLine);


var teaLine = ["Aman","Adnan", "Nishar", "Shifat","Shorif", "Roni"];
teaLine.splice(3,2,"Faiz","Guddu");
console.log(teaLine);


