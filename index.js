// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is your project title?','Please enter a project description','Please enter install instructions','Please enter usage information','Please enter contribution guidlines','Please enter test instructions','What license are you using?','What is your github username?','What is your email?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log('Success!')
    );
  }

// TODO: Create a function to initialize app
function init() {
    const data = `test`;
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: questions[0],
        },
        {
          type: 'input',
          name: 'projectDescription',
          message: questions[1],
        },
      ])
      .then((response) => {
        console.log(response);
        // Assuming you have a writeToFile function that writes the data to a file
        writeToFile("README.md", response);
      });
  }

// Function call to initialize app
init();










