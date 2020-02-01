var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "I@mcannibal1361",
  database: "employee_organizer"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "initialAction",
        type: "list",
        message: "What action would you like to take?",
        choices: ["Add A Department", "Add A Role", "Add An Employee"]
      })
      .then(function(answer) {
       if (answer.initialAction === "Add A Department") {
           addDepartment();
       } else if(answer.initialAction === "Add A Role") {
           addRole();
       } else if(answer.initialAction === "Add An Employee") {
           addEmployee();
       }
      });
}
function addDepartment() {
    inquirer
      .prompt({
        name: "",
        type: "",
        message: "",
        choices: []
      })
      .then(function(answer) {
        
      });
}
function addRole() {
    inquirer
      .prompt({
        name: "",
        type: "",
        message: "",
        choices: []
      })
      .then(function(answer) {
        
      });
}
function addEmployee() {
    inquirer
      .prompt({
        name: "",
        type: "",
        message: "",
        choices: []
      })
      .then(function(answer) {
        
      });
}