const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeArray = [];


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

/*
start application
CL prompt for team manager's:name, employee ID, email address, and office number
then: option to add engineer or intern or done
engineer option: prompt for: name, ID, email, and GitHub username -- auto return to option
intern option: name, ID, email, and school -- auto return to option
done option: exit app and generate HTML

Create common 

*/
/////  prompt questions  /////
const managerQuestions = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the employee's ID?",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the employee's office number?",
    },
  ]).then((managerData) => {
    const managerCreated = new Manager(managerData.name, managerData.employeeId, managerData.emailAddress, managerData.officeNumber);
    employeeArray.push(managerCreated);
    console.log(employeeArray);
    init();
  });
};

const engineerQuestions = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the employee's username on GitHub?",
      },
    ]).then((engineerData) => {
      const engineerCreated = new Engineer(engineerData.name, engineerData.employeeId, engineerData.emailAddress, engineerData.githubUsername);
      employeeArray.push(engineerCreated);
      //console.log(employeeArray);
      init();
    });
  };

  const internQuestions = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "schoolName",
        message: "What is the employee's school name?",
      },
    ]).then((internData) => {
      const internCreated = new Intern(internData.name, internData.employeeId, internData.emailAddress, internData.schoolName);
      employeeArray.push(internCreated);
      console.log(employeeArray);
      init();
    });
  };

  /////  initialization  /////
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What position are you filling?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
      },
    ])
    .then((promptData) => {
      switch (promptData.position) {
        case "Manager":
          managerQuestions();
          //run manager function
          break;
        case "Engineer":
            engineerQuestions();
          //run engineer function
          break;
        case "Intern":
            internQuestions();
          //run intern function
          break;
        case "Done":
          break;
      }
    });
}

init();
