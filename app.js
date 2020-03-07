const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require(".lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

inquirer.prompt([
     {
        type: "input",
        name: "name",
        message: "Please enter team manager name."
     },
     {
         type: "input",
         name: "ID",
         message: "What is ID for team manager?"
     },
     {
        type: "input",
        name: "email",
        message: "What is email for team manager?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is office number for team manager?"
    }
]);
   
 
