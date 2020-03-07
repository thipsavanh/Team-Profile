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

const promptUser = async () => {
    const questions = [
        {
            type: "list",
            name: "title",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID."
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email."
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee's GitHub username.",
            validate: function (title) {
                if (title.length === "Engineer") {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter employee's school.",
            validate: function (title) {
                if (title.length === "Intern") {
                    return true;
                }
            }
        },
        {
            type: "confirm",
            name: "add",
            message: "Add another employee?",
            default: false
        }
    ]
};

async function init() {
    try {
        const questions = await promptUser ()
    }
}
   
 
