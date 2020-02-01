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
       } else {
           connection.end();
       }
      });
}
function addDepartment() {
    inquirer
      .prompt(
    {
        name: "newDepartment",
        type: "input",
        message: "Department Name ->"

    }).then(function(answer) {
        
        connection.query(
            "INSERT INTO department SET ?",
            {
              name: answer.newDepartment,
            },
            function(err) {
              if (err) throw err;
              console.log("Your Department was created successfully!");
              // re-prompt the user for an initial action
              start();
            }
          );
      });
}
function addRole() {
    inquirer
      .prompt([
    {
        name: "newTitle",
        type: "input",
        message: "New Role Title ->"

    },
    {
        name: "newSalary",
        type: "input",
        message: "Yearly Salary ->"

    },
    {
        name: "departmentID",
        type: "input",
        message: "Input The Department Id By Number: 1-Sales, 2-Engineering, 3-Finance, 4-Legal ->",
       
    
    }]).then(function(answer) {
        
        connection.query(
            "INSERT INTO role SET ?",
            {
              title: answer.newTitle,
              salary: answer.newSalary,
              department_id: answer.departmentID
            },
            function(err) {
              if (err) throw err;
              console.log("Your role was created successfully!");
              // re-prompt the user for an initial action
              start();
            }
          );
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