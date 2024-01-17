// Q.1)Student grades based on their marks.......

const marks = 71;
let grade;

    if (marks >= 90) {
        grade ='A grade';
    } else if (marks >= 70 && marks <= 90) {
        grade ='B grade';
    } else if (marks >= 50 && marks < 70) {
        grade ='C grade';
    } else {
        grade ='F grade';
    }

    console.log('Your grade is:${grade}');



// Q.2)Generate numbers between any 2 given numbers.......

const num1 = 10;
const num2 = 25;

for (let i = num+1; i<=num2; i++){
    console.log(i);
}



// Q.3)checking of no if it is postive ,negative or zero using ternary opretor
const number = 7;
const result = (number > 0) ? "positive" : (number < 0) ? "negative" : "zero";

console.log(result);




// Q.4)usage of comma operator in JS.....

let a = 5, b = 20, c = 30;
console.log(a, b, c);



// Q.5)Username and Password.....

let username = "admin";
letpassword = "admin@123"
if(username="admin" && password ==="admin@123"){
    console.log("Login succcesfull");
}else{
    console.log("Invalid Details");
}



// Q.6)Processing fees of payments.....

let paymentMethod = "credit";  //can replac with diff payment methods

switch(paymentMethod){
    case "credit":
        console.log("processing fee is:2%");
        break;
        case "debit":
        console.log("processing fee is:1.5%");
        break;
        case "paypal":
        console.log("processing fee is:3%");
        break;
        default:
            console.log("Invalid payment methods");
}



//Q.7) wheather condition....

let currentTemperature = 25; // can replace with different values
let wheathercondition = currentTemperature > 30 ? "hot" : "cold";
console.log("current wheather condition:$(wheathercondition");



//Q.8)sum of numbers....

let targetNumber = 8; // Replace with desire positive integer

let sum = 0;
let currentNumber = 1;

do{
    sum+=currentNumber;
    currentNumber++;
}while(currentNumber <=targetNumber);

console.log("Sum of numbers from 1 t0 ${targetNumber}: ${sum}");