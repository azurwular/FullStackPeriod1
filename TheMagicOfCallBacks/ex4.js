var names = ["Lars" , "Jan", "Peter", "Bo", "Frederik"]
var phones = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];



var newNames =names.map(name => "<li>"+ name +"</li>")

//console.log(newNames);
var nameAndPhones = phones.map(phone => "<li>" + phone + "</li>")

var n = nameAndPhones.toString();

console.log(n)