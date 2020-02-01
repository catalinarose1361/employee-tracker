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
        choices: ["Add A Department", "Add A Role", "Add An Employee", "View Departments", "View Roles", "View Employees" ]
      })
      .then(function(answer) {
       if (answer.initialAction === "Add A Department") {
           addDepartment();
       } else if(answer.initialAction === "Add A Role") {
           addRole();
       } else if(answer.initialAction === "Add An Employee") {
           addEmployee();
       } else if(answer.initialAction === "View Departments") {
           viewDepartments();
       } else if(answer.initialAction === "View Roles") {
           viewRoles();
       } else if(answer.initialAction === "View Employees") {
          viewEmployees();
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
      .prompt([
    {
        name: "firstName",
        type: "input",
        message: "Enter First Name ->"

    },
    {
        name: "lastName",
        type: "input",
        message: "Enter Last Name ->"

    }, 
    {
        name: "departmentID",
        type: "input",
        message: "Input The Department Id By Number: 1-Sales, 2-Engineering, 3-Finance, 4-Legal ->",
       
    
    },
    {
        name: "roleID",
        type: "input",
        message: "Input The Role Id By Number: 1-Sales Lead, 2-Sales Person, 3-Lead Engineer, 4-Software Engineer, 5-Accountant, 6-Legal Team Lead, 7-Lawyer  ->",
       
    
    },
    {
        name: "managerID",
        type: "input",
        message: "Input Manager Id By Number ->"
       
    
    }
]).then(function(answer) {
        
        connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answer.firstName,
              last_name: answer.lastName,
              department_id: answer.departmentID,
              role_id: answer.roleID,
              manager_id: answer.managerID
            },
            function(err) {
              if (err) throw err;
              console.log("Your employee was created successfully!");
              // re-prompt the user for an initial action
              start();
            }
          );
      });
}
function viewDepartments() {
  connection.query("SELECT * FROM department", function(error, result) {
    if (error) throw err;
    console.table(result);
    start();
  }) 
  
}
function viewRoles() {
  connection.query("SELECT * FROM role", function(error, result) {
    if (error) throw err;
    console.table(result);
    start();
  }) 
}
function viewEmployees() {
  connection.query("SELECT * FROM employee", function(error, result) {
    if (error) throw err;
    console.table(result);
    start();
  }) 
}