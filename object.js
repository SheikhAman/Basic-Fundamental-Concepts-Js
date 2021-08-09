var student =  {id: 12, phone: 124, Name:"Aman"};
var student2 = {id:65, phone: 543, Name: "Adnan"};
var phoneNum = student.phone;
var PhoneNum2 = student["phone"];
var phoneNum3 = "phone";
var PhoneNumtrylast = student[phoneNum3];


console.log(student);
console.log(student2);
console.log(phoneNum);
console.log(PhoneNum2);
console.log(PhoneNumtrylast);

var studentName = {id: 134, phone: 535, Name:"Abir"};
studentName.phone = 3893;
studentName.phone =777;
console.log(studentName);

var students = {id:56, phone:555, name:"Aman"};
students.phone= 678;
students["phone"]=999;
phoneNoChange = "phone";
students[phoneNoChange]=1010;
console.log(students);

var studentProperty = {id:55, name:"Aman"};
studentProperty.Cinema ="Ogni 22";
studentProperty["Cinema"]="Smart girl";
var change = "Cinema";
studentProperty[change]="666 movies";
console.log(studentProperty);
