DROP DATABASE IF EXISTS employee_organizer;

CREATE DATABASE employee_organizer;

USE employee_organizer;


CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_id INT NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY(id)
);

INSERT INTO department (name) 
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id) 
VALUES ("Sales Lead", 10000, 1), ("Sales Person", 8000, 1), ("Lead Engineer", 15000, 2), ("Software Engineer", 12000, 2), ("Accountant", 12500, 3), ("Legal Team Lead", 25000, 4 ), ("Lawyer", 19000, 4);

INSERT INTO employee (first_name, last_name, department_id, role_id, manager_id) 
VALUES ("Kim", "Kardashian", 4, 6, null), ("Kourtney", "Kardashian", 1, 1, null), ("Khloe", "Kardashian", 2, 3, null), ("Scott", "Disick", 1, 2, 2), ("Kylie", "Jenner", 2, 4, 3), ("Kendall", "Jenner", 4, 7, 1), ("Kris", "Jenner", 3, 5, null);

SELECT employee.first_name, employee.last_name, employee.department_id, employee.role_id, employee.manager_id, employee.id, department.id, department.name, role.id, role.title, role.salary, role.department_id
FROM ((employee
INNER JOIN role ON employee.role_id = role.id)
INNER JOIN department ON employee.department_id = department.id);

SELECT employee.first_name, employee.last_name, employee.department_id, employee.role_id, employee.manager_id, employee.id, department.name, role.title, role.salary, role.department_id
FROM ((employee
INNER JOIN role ON employee.role_id = role.id)
INNER JOIN department ON employee.department_id = department.id);