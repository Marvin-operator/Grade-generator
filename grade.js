const prompt = require('prompt-sync')();

let marks = Number(prompt("Enter Student's Marks: "));
//Grading guideline

if (marks<=100 && marks>=79) 
{
    console.log("A")
} else if(marks<79 && marks>=60) {
    console.log ("B")
} else if(marks<60 && marks>=49) {
    console.log("C")
} else if(marks<49 && marks>=40) {
    console.log ("D")
} else if(marks<40) {
    console.log ("E")
} else if(isNaN(marks)) {
// value is not a number
console.log("error!");
}