const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./utils/generatePage");
const employeeArray = [];


/////  prompt questions  /////
const managerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "employeeId",
        message: "What is the employee's ID?",
        validate: (employeeIdInput) => {
            if (typeof(employeeIdInput) === 'number') {
              return true;
            } else {
              console.log("Please enter the employee ID number.");
              return false;
            }
          },
        },
      {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
    ])
    .then((managerData) => {
      const managerCreated = new Manager(
        managerData.name,
        managerData.employeeId,
        managerData.emailAddress,
        managerData.officeNumber
      );
      employeeArray.push(managerCreated);
      console.log(employeeArray);
      init();
    });
};

const engineerQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "employeeId",
        message: "What is the employee's ID?",
        validate: (employeeIdInput) => {
            if (typeof(employeeIdInput) === 'number') {
              return true;
            } else {
              console.log("Please enter the employee ID number.");
              return false;
            }
          },
        },
      {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the employee's username on GitHub?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username.");
            return false;
          }
        },
      },
    ])
    .then((engineerData) => {
      const engineerCreated = new Engineer(
        engineerData.name,
        engineerData.employeeId,
        engineerData.emailAddress,
        engineerData.githubUsername
      );
      employeeArray.push(engineerCreated);
      console.log(employeeArray);
      init();
    });
};

const internQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "employeeId",
        message: "What is the employee's ID?",
        validate: (employeeIdInput) => {
          if (typeof(employeeIdInput) === 'number') {
            return true;
          } else {
            console.log("Please enter the employee ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is the employee's email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "schoolName",
        message: "What is the employee's school name?",
        validate: (schoolNameInput) => {
          if (schoolNameInput) {
            return true;
          } else {
            console.log("Please enter your email address.");
            return false;
          }
        },
      },
    ])
    .then((internData) => {
      const internCreated = new Intern(
        internData.name,
        internData.employeeId,
        internData.emailAddress,
        internData.schoolName
      );
      employeeArray.push(internCreated);
      console.log(employeeArray);
      init();
    });
};

const doneAddingEmployees = () => {
  const generatePageComplete = generatePage(employeeArray);
  writeToFile("./dist/Index.html", generatePageComplete);
};

function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('The file has been saved!');
  });
}

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
          doneAddingEmployees();
          break;
      }
    });
}

init();
