#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([{
    message: "enter the first number", type: "number", name: "firstNumber"
},
{ message: "enter the second number", type: "number", name: "secondName" },
{ message: "select one of the operators to perform operation", type: "list", name: "operator", choices:["addition", "subtraction", "multiplication", "division"] }
]);
if(answer.operator=== "addition"){console.log(answer.firstNumber+answer.secondName)}
else if(answer.operator=== "subtraction"){console.log(answer.firstNumber-answer.secondName)}
else if(answer.operator=== "multiplication"){console.log(answer.firstNumber*answer.secondName)}
else if(answer.operator=== "division"){console.log(answer.firstNumber/answer.secondName)}
else {console.log("You entered an invalid digit")}
